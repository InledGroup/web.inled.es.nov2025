
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: string;
  updated: string;
  url: string;
  slug: string;
  author: string;
  thumbnail?: string;
  tags: string[];
}

export async function getPosts(): Promise<BlogPost[]> {
  const feedUrl = 'https://inledgroupinternalblog.blogspot.com/feeds/posts/default?alt=json';
  
  try {
    const response = await fetch(feedUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.feed || !data.feed.entry) {
      return [];
    }

    return data.feed.entry.map((entry: any) => {
      // Find the alternate link which is the permalink
      const link = entry.link.find((l: any) => l.rel === 'alternate');
      const href = link ? link.href : '';
      
      // Extract slug from URL (e.g. .../2023/12/my-post.html -> my-post)
      // We will actually use the path relative to the blog root as slug to handle uniqueness better
      // URL: http://inledgroupinternalblog.blogspot.com/2023/12/titulo.html
      // Slug: 2023/12/titulo
      let slug = '';
      if (href) {
        const urlObj = new URL(href);
        const pathname = urlObj.pathname; // /2023/12/titulo.html
        slug = pathname.replace(/^\/|\.html$/g, ''); // 2023/12/titulo
      } else {
        // Fallback to ID if no link
        slug = entry.id.$t.split('-').pop();
      }

      // Extract thumbnail if available
      let thumbnail = '';
      if (entry.media$thumbnail) {
        thumbnail = entry.media$thumbnail.url;
        // Get higher res image by replacing s72-c with s1600 or similar if needed, 
        // but blogger thumbnails usually work. default is usually small.
        // Let's try to get a bigger one.
        thumbnail = thumbnail.replace('s72-c', 'w800'); 
      } else {
          // try to find first image in content
          const content = entry.content ? entry.content.$t : '';
          const match = content.match(/<img[^>]+src="([^">]+)"/);
          if (match) {
              thumbnail = match[1];
          }
      }

      return {
        id: entry.id.$t,
        title: entry.title.$t,
        content: entry.content ? entry.content.$t : '',
        published: entry.published.$t,
        updated: entry.updated.$t,
        url: href,
        slug,
        author: entry.author[0].name.$t,
        thumbnail,
        tags: entry.category ? entry.category.map((c: any) => c.term) : []
      };
    });

  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

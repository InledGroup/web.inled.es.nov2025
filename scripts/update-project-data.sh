#!/bin/bash

# Requiere GITHUB_TOKEN con permisos de lectura de proyectos
# Uso: ./update-project-data.sh <ORGANIZATION> <PROJECT_NUMBER>

ORG=$1
PROJECT_NUM=$2

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN is not set."
  exit 1
fi

QUERY="query {
  organization(login: \"$ORG\") {
    projectV2(number: $PROJECT_NUM) {
      title
      items(first: 20) {
        nodes {
          content {
            ... on Issue {
              title
              url
              state
              labels(first: 5) {
                nodes {
                  name
                }
              }
            }
            ... on PullRequest {
              title
              url
              state
            }
            ... on DraftIssue {
              title
            }
          }
          fieldValues(first: 10) {
            nodes {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
                field {
                  ... on ProjectV2FieldCommon {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}"

# Ejecutar consulta
RESPONSE=$(curl -s -H "Authorization: bearer $GITHUB_TOKEN" \
     -X POST -d "$(jq -n --arg query "$QUERY" '{query: $query}')" \
     https://api.github.com/graphql)

# Procesar con jq para limpiar el formato
echo "$RESPONSE" | jq '.data.organization.projectV2' > src/data/github-project.json

echo "Project data updated in src/data/github-project.json"

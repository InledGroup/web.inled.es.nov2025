#!/bin/bash

# Configuración
ORG="InledGroup"
PROJECT_NUM=1

if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GITHUB_TOKEN is not set."
  exit 1
fi

# GraphQL Query para Projects v2
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
              ... on ProjectV2ItemFieldTextValue {
                text
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

# Ejecutar consulta con curl
RESPONSE=$(curl -s -X POST \
  -H "Authorization: bearer $GITHUB_TOKEN" \
  -H "Content-Type: application/json" \
  -d "$(jq -n --arg query "$QUERY" '{query: $query}')" \
  https://api.github.com/graphql)

# Verificar si hay errores en la respuesta de GitHub
ERRORS=$(echo "$RESPONSE" | jq '.errors')
if [ "$ERRORS" != "null" ]; then
  echo "GitHub API Error:"
  echo "$RESPONSE" | jq '.errors'
  exit 1
fi

# Guardar los datos procesados
echo "$RESPONSE" | jq '.data.organization.projectV2' > src/data/github-project.json

if [ $? -eq 0 ]; then
  echo "Successfully updated src/data/github-project.json"
else
  echo "Failed to process GitHub response"
  exit 1
fi

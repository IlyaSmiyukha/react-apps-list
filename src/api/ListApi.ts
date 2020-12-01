import { gql } from '@apollo/client';

export const getRelosList = gql`
  query Search($searchWord: String!, $cursor: String) {
    search(query: $searchWord, type: REPOSITORY, first: 10, after: $cursor) {
      pageInfo {
         hasNextPage
         endCursor
       }
      edges {
        node {
          ... on Repository {
            nameWithOwner
            forkCount
            url
            stargazerCount
            id
          }
        }
      }
    }
  }
`;

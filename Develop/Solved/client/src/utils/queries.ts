import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      tabs {
        _id
        tabContent
        createdAt
      }
    }
  }
`;


export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      email
      tabs {
        _id
        tabContent
        tabAuthor
        createdAt
      }
    }
  }
`;
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

export const QUERY_TABS = gql`
  query getTabs {
    tabs {
      _id
      tabContent
      tabAuthor
      createdAt
    }
  }
`

export const QUERY_SINGLE_TAB = gql`
  query getSingleTab($tabId: ID!) {
    tab(tabId: $tabId) {
      _id
      tabContent
      tabAuthor
      createdAt
    }
  }
`


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

// export const QUERY_THOUGHTS = gql`
//   query getThoughts {
      //     thoughts {
        //       _id
      //       thoughtText
      //       thoughtAuthor
      //       createdAt
      //     }
      //   }
      // `;
      // export const QUERY_SINGLE_THOUGHT = gql`
      //   query getSingleThought($thoughtId: ID!) {
      //     thought(thoughtId: $thoughtId) {
      //       _id
      //       thoughtText
      //       thoughtAuthor
      //       createdAt
      //       comments {
      //         _id
      //         commentText
      //         commentAuthor
      //         createdAt
      //       }
      //     }
      //   }
      // `;
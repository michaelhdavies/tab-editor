import {gql} from '@apollo/client';

export const QUERY_USER = gql`
query User($username: String!) {
  user(username: $username) {
    _id
    email
    password
    tabs {
      _id
      createdAt
      tabAuthor
      tabContent
      updatedAt
    }
    username
  }
}
`;

export const QUERY_USERS = gql`
query users {
  users {
    _id
    email
    password
    tabs {
      _id
      createdAt
      tabAuthor
      tabContent
      updatedAt
    }
    username
  }
}
`;

export const QUERY_ME = gql`
query me {
  me {
    _id
    email
    password
    tabs {
      _id
      tabContent
      createdAt
      tabAuthor
      updatedAt
    }
    username
  }
}

`;

export const QUERY_TAB= gql`
query tab($tabId: ID!) {
  tab(tabId: $tabId) {
    _id
    createdAt
    tabAuthor
    tabContent
    updatedAt
  }
}

`;

export const QUERY_TABS = gql`
query tabs {
  tabs {
    _id
    createdAt
    tabAuthor
    tabContent
    updatedAt
  }
}
`;


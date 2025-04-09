import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;
export const ADD_TAB =gql`
mutation addTab($tabContent: [[Int]]!, $tabAuthor: String!) {
  addTab(tabContent: $tabContent, tabAuthor: $tabAuthor) {
    _id
    tabContent
    tabAuthor
    createdAt
    updatedAt
  }
}
`;
export const EDIT_TAB = gql`
mutation editTab($tabId: ID!, $tabContent: [[Int]]!) {
  editTab(tabId: $tabId, tabContent: $tabContent)
}
`;
export const DROP_TAB = gql`
mutation dropTab($tabId: ID!) {
  dropTab(tabId: $tabId) {
    _id
    createdAt
    tabAuthor
    tabContent
    updatedAt
  }
}
`;
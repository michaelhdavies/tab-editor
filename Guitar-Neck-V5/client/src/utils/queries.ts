import {gql} from '@apollo/client';

export const QUERY_ME = gql`
query Me {
  me {
    _id
    email
    username
    tabs {
      _id
      tabContent
    }
  }
}
`;

export const QUERY_TAB= gql`
query getTab($tabId: ID!) {
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
query getTabs {
  tabs {
    _id
    createdAt
    tabAuthor
    tabContent
    updatedAt
  }
}
`;

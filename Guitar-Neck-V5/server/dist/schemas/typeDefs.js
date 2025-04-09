const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    tabs: [Tab]!
  }
type Auth {
    token: ID!
    user: User
  }
type Tab{
_id: ID
  tabContent: [[Int]]
  tabAuthor: String
  createdAt: String
  updatedAt: String
  }
type Query {
    tabs: [Tab]
    tab(tabId: ID!): Tab
    users: [User]
    user(username: String!): User
    me: User
    }
type Mutation {
    addTab(tabContent:[[Int]]!, tabAuthor:String!): Tab
    dropTab(tabId: ID!): Tab
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    editTab (tabId: ID!, tabContent: [[Int]]!): [[Int]]

}
`;
export default typeDefs;

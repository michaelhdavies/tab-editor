const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    tabs: [Tab]!
  }

  type Tab {
    _id: ID
    tabContent: String,
    tabAuthor: String,
    createdAt: String
  }

  type TabInput {
    tabContent: String!
    tabAuthor: String!
  }
  
  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    tabs: [Tab]!
    tab(tabId: ID!): Tab
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    addTab(input: TabInput!): Tab
    removeTab(tabId: ID!): Tab
  }
  `;
    
export default typeDefs;

    // type Thought {
    //   _id: ID
    //   thoughtText: String
    //   thoughtAuthor: String
    //   createdAt: String
    //   comments: [Comment]!
    // }
  
    // type Comment {
      //   _id: ID
      //   commentText: String
      //   createdAt: String
    // }
    
    
      
      // input ThoughtInput {
      //   thoughtText: String!
      //   thoughtAuthor: String!
      // }


      // Mutations:
      // addThought(input: ThoughtInput!): Thought
      // removeThought(thoughtId: ID!): Thought
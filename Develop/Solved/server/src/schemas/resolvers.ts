import { Tab, User } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js'; 

// Define types for the arguments
interface AddUserArgs {
  input:{
    username: string;
    email: string;
    password: string;
  }
}

interface LoginUserArgs {
  email: string;
  password: string;
}

interface UserArgs {
  username: string;
}

interface TabArgs {
  tabId: string;
}


interface addTabArgs {
  input:{
    tabContent: string;
    tabAuthor: string;
  }
}

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (_parent: any, { username }: UserArgs) => {
      return User.findOne({ username }).populate('thoughts');
    },
    
    tabs: async () => {
      return await Tab.find().sort({ createdAt -1 });
    },
    tab: async ( parent: any, { tabId }: TabArgs) => {
      return await Tab.findOne({ _id: tabId });
    },
    
    
    // Query to get the authenticated user's information
    // The 'me' query relies on the context to check if the user is authenticated
    me: async (_parent: any, _args: any, context: any) => {
      // If the user is authenticated, find and return the user's information along with their thoughts
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('tabs');
      }
      // If the user is not authenticated, throw an AuthenticationError
      throw new AuthenticationError('Could not authenticate user.');
    },
  },
  Mutation: {
    addUser: async (_parent: any, { input }: AddUserArgs) => {
      // Create a new user with the provided username, email, and password
      const user = await User.create({ ...input });
      
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);
      
      // Return the token and the user
      return { token, user };
    },
    
    login: async (_parent: any, { email, password }: LoginUserArgs) => {
      // Find a user with the provided email
      const user = await User.findOne({ email });
      
      // If no user is found, throw an AuthenticationError
      if (!user) {
        throw new AuthenticationError('Could not authenticate user.');
      }
      
      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);
      
      // If the password is incorrect, throw an AuthenticationError
      if (!correctPw) {
        throw new AuthenticationError('Could not authenticate user.');
      }
      
      // Sign a token with the user's information
      const token = signToken(user.username, user.email, user._id);
      
      // Return the token and the user
      return { token, user };
    },
    addTab: async (_parent: any, { input }: AddTabArts, context: any) => {
      if (context.user) {
        const tab = await Tab.create({ ...input });
        
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { tabs: tab._id } }
        );
        return tab;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    
    
    removeTab: async (_parent: any, { tabId }: TabArgs, context: any) => {
      if(context.user) {
        const tab = await Tab.findOneAndDelete({
          _id: tabId,
          tabAuthor: context.user.username,
        });
        if(!tab){
          throw AuthenticationError;
        };
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { tabs: tab._id } } 
        );
        return tab;
      }
      throw AuthenticationError;
    },
  },
};


export default resolvers;

// interface ThoughtArgs {
//   thoughtId: string;
// }
// interface AddThoughtArgs {
//   input:{
//     thoughtText: string;
//     thoughtAuthor: string;
//   }
// }
// thoughts: async () => {
//   return await Thought.find().sort({ createdAt: -1 });
// },
// thought: async (_parent: any, { thoughtId }: ThoughtArgs) => {
//   return await Thought.findOne({ _id: thoughtId });
// },
// addThought: async (_parent: any, { input }: AddThoughtArgs, context: any) => {
//   if (context.user) {
//     const thought = await Thought.create({ ...input });

//     await User.findOneAndUpdate(
//       { _id: context.user._id },
//       { $addToSet: { thoughts: thought._id } }
//     );

//     return thought;
//   }
//   throw AuthenticationError;
//   ('You need to be logged in!');
// },
// removeThought: async (_parent: any, { thoughtId }: ThoughtArgs, context: any) => {
//   if (context.user) {
//     const thought = await Thought.findOneAndDelete({
//       _id: thoughtId,
//       thoughtAuthor: context.user.username,
//     });

//     if(!thought){
//       throw AuthenticationError;
//     }

//     await User.findOneAndUpdate(
//       { _id: context.user._id },
//       { $pull: { thoughts: thought._id } }
//     );

//     return thought;
//   }
//   throw AuthenticationError;
// },
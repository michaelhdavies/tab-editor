import {Tab, User} from '../models/index.js';
import {signToken} from '../utils/auth.js';

interface TabArgs {
    tabId:string;
    tabContent: number[][];

    }
interface AddTabArgs {
    tabContent: number [][];
    tabAuthor: string;
    }
interface DropTabArgs {
    tabId: string;
    }

const resolvers = {
    Query:{
        tab:async (_parent:any,{tabId}: TabArgs) => {
            return await Tab.findById(tabId);
        },
        tabs:async () => {
            return await Tab.find().sort({createdAt: -1});
        },
        me: async (_parent: any, _args: any, context: any) => {
            // If the user is authenticated, find and return the user's information along with their thoughts
            if (context.user) {
              return User.findOne({ _id: context.user._id }).populate('tabs');
            }
            // If the user is not authenticated, throw an AuthenticationError
            throw new Error('Could not authenticate user.');
          },
    },
    Mutation:{
        addUser: async (_parent:any, {username, email, password}:any) => {
            const user = await User.create({username, email, password});
            const token = signToken(user.username, user.email, user._id);
            return {token, user};
        },
        login: async (_parent:any, {email, password}:any) => {
            const user = await User.findOne({email});
            if (!user) {
                throw new Error('Incorrect credentials');
            }
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new Error('Incorrect credentials');
            }
            const token = signToken(user.username, user.email, user._id);
            return {token, user};
        },
        
        addTab:async (_parent:any, {tabContent, tabAuthor}: AddTabArgs, context:any) => {
            console.log('tabContent:', tabContent);
            console.log('tabAuthor:', tabAuthor);
            
            try { 
                if (!context.user) {
                    throw new Error('You need to be logged in!');
                }
                const userId = context.user._id;
                const user = await User.findById(userId);
                console.log('userId:', userId);
                console.log('user:', user);
                if (!user) {
                    throw new Error('User not found');
                }
                const newTab = await Tab.create({tabContent, tabAuthor});
                await newTab.save();
                console.log('newTab:', newTab);
                await User.findOneAndUpdate(
                    {_id: userId},
                    {$addToSet: {tabs: newTab._id}},
                    {new: true}
                )
            }catch (error) {
                console.error(error);
                throw new Error('Error creating tab');
            }
        },
        editTab: async (_parent:any, {tabId, tabContent}: TabArgs) => {
            try{
            const newTab= await Tab.findByIdAndUpdate(
                {_id: tabId},
                {$set: {tabContent: tabContent}},
                {new: true}
            ); return newTab?.tabContent;
        } catch (error) {
            console.error(error);
            throw new Error('Error editing tab');
        }
    },
        dropTab: async (_parent: any, { tabId }: DropTabArgs, context: any) => {
        if (context.user) {
          const tab = await Tab.findOneAndDelete({
            _id: tabId,
          });
  
          if(!tab){
            throw new Error('Tab not found or unauthorized');
          }
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { tabs: tab._id } }
          );
  
          return tab;
        }
        throw new Error('You need to be logged in!');
    }

    }
}

export default resolvers;
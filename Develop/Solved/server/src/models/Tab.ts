import { Schema, model, Document } from 'mongoose';

// Define an interface for the Tab document

interface ITab extends Document {
  tabContent: string,
  tabAuthor: string
  createdAt: Date;
};


// Define the schema for the Tab document
const tabSchema = new Schema<ITab>(
  {
    tabContent: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
      trim: true
    }, 
    tabAuthor: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);


const Tab = model<ITab>('Tab', tabSchema);

export default Tab;
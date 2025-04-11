import { Schema, model } from 'mongoose';
;
// Define the schema for the Tab document
const tabSchema = new Schema({
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
}, {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
});
const Tab = model('Tab', tabSchema);
export default Tab;

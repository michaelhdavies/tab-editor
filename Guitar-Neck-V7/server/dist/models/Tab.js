import { Schema, model } from 'mongoose';
const tabSchema = new Schema({
    tabContent: {
        type: [[{ type: Number }]],
        required: true,
    },
    tabAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
});
const Tab = model('Tab', tabSchema);
export default Tab;

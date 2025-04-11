import {Schema, model, Document} from 'mongoose';

interface ITab extends Document {
    tabContent: number [][];
    tabAuthor: string;
    createdAt: Date;
    updatedAt: Date;
}

const tabSchema = new Schema<ITab>({
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
},
{
    timestamps: true,
    toJSON: {getters: true},
    toObject: {getters: true},
});

const Tab= model<ITab>('Tab', tabSchema);
export default Tab;


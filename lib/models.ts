import mongoose, { Schema, SchemaType } from "mongoose";

const UserSchema = new mongoose.Schema({ 
    name: {
        type: String
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    sub: {
        type: String
    },
    picture: {
        type: String
    },
    status: {
        type: String
    },
    last_message: {
      type: String,
    },
}, { 
    timestamps: true 
});

const GroupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }       
}, {
    timestamps: true
});


export const User = mongoose.models.Users || mongoose.model('User', UserSchema);
export const Group = mongoose.models.Groups || mongoose.model('Group', GroupSchema);



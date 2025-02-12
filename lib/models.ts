import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    _id: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    picture: {
        type: String
    }
}, { 
    timestamps: true 
});


export const User = mongoose.models.Users || mongoose.model('User', UserSchema);



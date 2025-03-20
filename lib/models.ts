import mongoose from "mongoose";

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
    }
}, { 
    timestamps: true 
});


export const User = mongoose.models.Users || mongoose.model('User', UserSchema);



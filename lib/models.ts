import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({ 
    id: {
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
    image: {
        type: String
    }
}, { 
    timestamps: true 
});


export const Users = mongoose.models.Users || mongoose.model('Users', UserSchema);



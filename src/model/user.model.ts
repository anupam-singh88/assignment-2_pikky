import mongoose, { Schema, Document } from "mongoose";
import { Content } from "next/font/google";

export interface User extends Document{
    username: string,
    email: string,
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isVerified: boolean,
    role : string
}

const userSchema: Schema<User>  = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'please use a valid email address'],
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    verifyCode: {
        type: String,
        required: true
    },
    verifyCodeExpiry:{
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    role :{ type: String, enum: ['Admin', 'User'], default: 'User' }

})


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', userSchema )

export default UserModel;
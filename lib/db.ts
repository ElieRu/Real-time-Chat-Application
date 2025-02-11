import mongoose from "mongoose";

export default async function db() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/real-time-chat-application');
  } catch (error) {
    console.log(error);
  }
}

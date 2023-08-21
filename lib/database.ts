import mongoose from 'mongoose';

const connectToDb = async () => mongoose.connect(process.env.MONGODB_URI!);

export default connectToDb;

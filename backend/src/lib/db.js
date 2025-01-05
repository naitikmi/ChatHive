import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        const connectionDB = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Db connected : ${connectionDB.connection.host}`);
    }catch(error){
        console.log("mongodb connection error:",error);
    }
};
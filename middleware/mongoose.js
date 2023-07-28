import mongoose from "mongoose";

const connectDb = ()=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }
    await mongoose.connect(process.env.MONGO_URI)
}
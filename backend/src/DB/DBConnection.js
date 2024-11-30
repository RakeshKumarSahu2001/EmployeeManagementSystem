import mongoose from "mongoose";

const DBConnection=async(url)=>{
        const connection=await mongoose.connect(url);
        return connection;
}

export default DBConnection;
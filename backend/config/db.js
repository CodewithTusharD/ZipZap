import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://tushardhingra314:20032010@cluster0.2zsak.mongodb.net/ZipZap').then(()=>console.log("DB Connected"));
   
}

// mongodb+srv://tushardhingra314:20032010@cluster0.2zsak.mongodb.net/?
// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
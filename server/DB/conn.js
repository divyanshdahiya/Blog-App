const mongoose=require("mongoose");
const DB= "mongodb+srv://div:divyansh@cluster0.iq1qahi.mongodb.net/Blog-app?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message));
const mongoose=require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    name: {
        type:String,
        require:true
    },
})

const blogs=new mongoose.model("blogs",blogSchema);

module.exports= blogs;
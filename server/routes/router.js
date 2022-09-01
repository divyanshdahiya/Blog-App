const express= require("express");

const router=express.Router();
const blogs = require("../models/blogSchema")

// router.get('/',(req,res)=>{
//     console.log("connect")
// })

router.post("/addBlog",async(req,res)=>{
    console.log(req.body);

    const {title,description,name}=req.body;
    if(!title||!description||!name){
        res.send(422).json("pls fill all the data")
    }
    try{
        const preblog = await blogs.findOne({title:title});
        console.log(preblog);

        if(preblog){
            res.status(422).json("blog alread present with same title");
        }else{
            const addBlog= new blogs({
                title,description,name 
            });
            await addBlog.save();
            res.status(201).json(addBlog);
            console.log(addBlog);
        }

    }catch(eroor){
        res.send(422).json(error)
    }
});



router.get("/getBlog",async(req,res)=>{
    try{
        const blogData=await blogs.find();
        res.status(201).json(blogData)
        console.log(blogData)
    }catch(error){

    }
})


router.get("/getBlogData/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;

        const blogindividual = await blogs.findById({_id:id});
        console.log(blogindividual);
        res.status(201).json(blogindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})


router.patch("/editBlog/:id",async(req,res)=>{
    try{
        const {id}=req.params
        const editBlog=await blogs.findByIdAndUpdate(id,req.body,{
            new:true
        })
    }catch(error){
        res.status(422).json(error)
    }
})




module.exports = router; 
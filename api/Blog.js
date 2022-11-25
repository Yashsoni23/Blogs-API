const mongoose = require("mongoose");
const Blogs = require("../model/Blogs");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/blogs",(req,res)=>{
    res.send("blogfrom");
})

// Create Blog Api
router.post("/NewBlog", ((req, res) => {
    console.log(req.body);
    const createBlog = async () => {
        try {
            const Blog = new Blogs({
                _id: new mongoose.Types.ObjectId,
                subject: req.body.subject,
                short_description: req.body.short_description,
                short_description_para_1: req.body.short_description_para_1,
                short_description_para_2: req.body.short_description_para_2,
                short_description_para_3: req.body.short_description_para_3,
                short_description_para_4: req.body.short_description_para_4,
            })
            const result = await Blog.save();
            console.log(result);
            res.send(result);
        } catch (error) {
            console.log(error)
        }
    }
    createBlog();
}));


// Read All Blogs 
router.get("/all_blogs",((req,res)=>{
    const GetAllBlogs = async ()=>{
        try {
            const ReadAllBlogs = await Blogs.find();
            res.send(ReadAllBlogs);
        } catch (error) {
            console.log(error)
        }
    }
    GetAllBlogs();
}))


// Read Only One Blog 

router.get("/:id",((req,res)=>{
    const GetAllBlogs = async ()=>{
        try {
            const ReadAllBlogs = await Blogs.find({_id:req.params.id});
            res.send(ReadAllBlogs);
        } catch (error) {
            console.log(error)
        }
    }
    GetAllBlogs();
}))


// Delete Blog Api
router.delete("/removeBlog/:id",((req,res)=>{
    const DeleteBlog = async ()=>{

        try {
            const RemoveBlog = await Blogs.findByIdAndDelete({_id:req.params.id}); 
            res.send(RemoveBlog);
            console.log(RemoveBlog);

        } catch (error) {
            console.log(error)
        }

    }

    DeleteBlog();
}))




module.exports = router;
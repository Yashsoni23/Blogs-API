const mongoose = require("mongoose");

const Blogs = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    subject: String,
    short_description: String,
    short_description_para_1: String,
    short_description_para_2: String,
    short_description_para_3: String,
    short_description_para_4: String,
});

module.exports = mongoose.model("Blogs", Blogs);
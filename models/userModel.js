const mongoose = require("mongoose")

const usermodel=new mongoose.Schema({
name: String,
price: String,
image: String,
description: String,
})

module.exports=mongoose.model("collection",usermodel)
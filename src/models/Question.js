const mongoose = require("mongoose"),
Schema = mongoose.Schema

const questionSchema = new Schema({
    
    title: String,
    body: String,
    userId: Number,
    access: {type:Number, default:0},
    createdAt: {type:Date, default:Date.now},
    updateAt: {type:Date, default:Date.now},
    active: {type:Boolean, default:true}

})

module.exports = mongoose.model("Question", questionSchema)
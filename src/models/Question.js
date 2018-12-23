const mongoose = require("mongoose"),
Schema = mongoose.Schema

const questionSchema = new Schema({
    
    title: String,
    body: String,
    userId: Number,
    createdAt: String,
    updateAt: String,
    active: Boolean

})

module.exports = mongoose.model("Question", questionSchema)
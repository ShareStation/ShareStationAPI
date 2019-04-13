const mongoose = require("mongoose"),
Schema = mongoose.Schema

const answerSchema = new Schema({
    
    body: String,
    user: { type: Schema.Types.ObjectId, ref: "UserSchema" },
    question: {type: Schema.Types.ObjectId, ref: "questionSchema"},
    choosed: {type: Boolean, default:false},
    createdAt: {type:Date, default:Date.now},
    updateAt: {type:Date, default:Date.now},
    active: {type:Boolean, default:true}

})

module.exports = mongoose.model("Answer", answerSchema)
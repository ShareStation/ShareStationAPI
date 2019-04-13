const mongoose = require("mongoose"),
Schema = mongoose.Schema

const questionSchema = new Schema({
    
    title: String,
    body: String,
    user: { type: Schema.Types.ObjectId, ref: "UserSchema" },
    category: {
                type:String, 
                enum:["Mecânica",
                      "Elétrica",
                      "Software",
                      "Eletrônica",
                      "Matemática",
                      "Português",
                      "Inglês",
                      "Outros"],
                default:"Outros"},
    answers: [{type: Schema.Types.ObjectId, ref: "answerSchema"}],
    access: {type:Number, default:0},
    createdAt: {type:Date, default:Date.now},
    updateAt: {type:Date, default:Date.now},
    active: {type:Boolean, default:true}

})

module.exports = mongoose.model("Question", questionSchema)
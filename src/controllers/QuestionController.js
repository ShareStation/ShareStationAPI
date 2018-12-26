const mongoose = require("mongoose")   
const Question = require("../models/Question")

exports.insert = (req, res)=>{

    const questionReq = new Question(req.body)
    
    questionReq.save((err, question)=>{

        if(err)
            res.send(err)

        res.status(201)
           .send({insercao:"sucesso"})

    })

}

exports.select = (req, res)=>{

    Question.find({}, (err, question)=>{

        if(err)
            res.send(err)

        res.json(question)
           .status(200)

    })

}

exports.selectById = (req, res)=>{

    Question.findById(req.params.questionId, (err, question)=>{

        if(err)
            res.send(err)

        if(question == undefined)
            res.send({message:"Question not found"})
               .status(404)

        else
            res.send(question)
               .status(200)

    })

}

exports.update = (req, res)=>{

    Question.findOneAndUpdate(req.body.questionId, req.body, {new:true}, (err)=>{

        if(err)
            res.send(err)

        res.send({message:"Question updated"})
           .status(200)

    })

}

exports.delete = (req, res)=>{

    Question.remove({_id:req.body.questionId}, (err, question)=>{

        if(err)
            res.send(err)

        res.send({message:"Question deleted"})
           .status(200)

    })

}
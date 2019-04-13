const mongoose = require("mongoose")   
const Answer = require("../models/Answer")

exports.insert = (req, res)=>{

    const answerReq = new Answer(req.body)
    
    answerReq.save((err, answer)=>{

        if(err)
            res.send(err)

        res.status(201)
           .send({insercao:"sucesso"})

    })

}

exports.select = (req, res)=>{

    Answer.find({}, (err, answer)=>{

        if(err)
            res.send(err)

        res.json(answer)
           .status(200)

    })

}

exports.selectById = (req, res)=>{

    Answer.findById(req.params.answerId, (err, answer)=>{

        if(err)
            res.send(err)

        if(answer == undefined)
            res.send({message:"Answer not found"})
               .status(404)

        else
            res.send(answer)
               .status(200)

    })

}

exports.update = (req, res)=>{

    Answer.findOneAndUpdate(req.body.answerId, req.body, {new:true}, (err)=>{

        if(err)
            res.send(err)

        res.send({message:"Answer updated"})
           .status(200)

    })

}

exports.delete = (req, res)=>{

    Answer.remove({_id:req.body.answerId}, (err, answer)=>{

        if(err)
            res.send(err)

        res.send({message:"Answer deleted"})
           .status(200)

    })

}
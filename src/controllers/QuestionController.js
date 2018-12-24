const mongoose = require("mongoose")   
const Question = require("../models/Question")

exports.insert = function(req, res){

    let questionReq = new Question(req.body)
    
    questionReq.save(function(err, question){

        if(err)
            res.send(err)

        res.send({insercao:"sucesso"})  

    })

}

exports.select = function(req, res){

    res.send({select:"OK"})

}

exports.update = function(req, res){

    res.send({update:"OK"})

}

exports.delete = function(req, res){

    res.send({delete:"OK"})

}
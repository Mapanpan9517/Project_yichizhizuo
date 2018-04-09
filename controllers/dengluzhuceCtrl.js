var Admin = require("../models/Admin.js");
var formidable = require("formidable");

//查找信息
exports.checkDengluXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,data){
        const {userName,password} = data;
        // console.log(content)
        Admin.find().exec(function(err,content){
            console.log(content)
            if(content.length == 0){
                res.json({"result":0})
            }else{
                if(content[0]["password"]==password){
                    res.json({"result":1})
                }else{
                    res.json({"result":-1})
                }
            }
        })
    })
}
exports.checkZhuceXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,data){
        const {userName} = data;
        Admin.find({userName}).exec(function(err,content){
            if(content.length == 0){
                Admin.create(data,function(err,content){
                    // console.log(content)
                    if(!err){
                        res.json({"result":1})
                    }
                })
            }else{
                res.json({"result":0})
            }
        })
    }) 
}
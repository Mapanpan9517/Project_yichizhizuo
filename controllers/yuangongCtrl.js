var Yuangong = require("../models/Yuangong.js");
var formidable = require("formidable");

//获取信息
exports.GetXinxi = function(req,res){
    Yuangong.find().sort({"gonghao":1}).exec(function(err,content){
        if(!err){
            console.log("获取员工信息成功!!");
            res.json({"result":content});
        }
    })
}
//增加信息
exports.AddXinxi = function(req,res){
    var form  = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        var xinxi = content.xinxi;
        // console.log(content)
        Yuangong.create(xinxi,function(err,content){
            if(!err){
                console.log("添加员工信息成功!!");
                Yuangong.find().exec(function(err,content){
                    res.json({"result":content})
                })
            }
        })
    })
}
//删除信息
exports.DeleteXinxi = function(req,res){
    var id = req.params.id;
    Yuangong.remove({"_id":id}).exec(function(err,content){
        if(!err){
            console.log("删除员工信息成功！！");
            Yuangong.find().exec(function(err,content){
                res.json({"result":content})
            })
        }
    })
}
//修改信息
exports.ChangeXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        const {_id,Xinxi} = content;
        Yuangong.update({_id},Xinxi,function(err,content){
            if(!err){
                console.log("修改员工信息成功！！");
                Yuangong.find().exec(function(err,content){
                    res.json({"result":content})
                })
            }
        })
    })
}
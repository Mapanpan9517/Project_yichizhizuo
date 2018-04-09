
var Yuancailiao_Ruku = require("../models/Yuancailiao_Ruku.js");
var Yuancailiao_Chuku = require("../models/Yuancailiao_Chuku.js");
var formidable = require("formidable");

//获取信息
exports.GetXinxi = function(req,res){
    Yuancailiao_Ruku.find().exec(function(err,content_Ruku){
        if(!err){
            Yuancailiao_Chuku.find().exec(function(err,content_Chuku){
                if(!err){
                    console.log("获取库存日志信息成功!!");
                    res.json({"result":{
                        content_Ruku,
                        content_Chuku
                    }})
                }
            })
        }
    })
}

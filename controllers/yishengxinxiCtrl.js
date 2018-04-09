var Yishengxinxi = require("../models/Yishengxinxi.js");
var formidable = require("formidable");


// //获取信息
exports.GetXinxi = function(req,res){
    Yishengxinxi.find().exec(function(err,content){
        if(!err){
            console.log("获取医生信息成功!!");
            res.json({"result":content});
        }
    })
}
//增加信息
exports.AddXinxi = function(req,res){
    var form  = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        const Xinxi = content.Xinxi;
        // console.log(Xinxi)
        Yishengxinxi.create(Xinxi,function(err,content){
            if(!err){
                console.log("添加医生信息成功!!");
                Yishengxinxi.find().exec(function(err,content){
                    console.log(content)
                    res.json({"result":content})
                })
            }
        })
    })
}
//删除信息
exports.DeleteXinxi = function(req,res){
    var id = req.params.id;
    Yishengxinxi.remove({"_id":id}).exec(function(err,content){
        if(!err){
            console.log("删除医生信息成功！！");
            Yishengxinxi.find().exec(function(err,content){
                res.json({"result":content})
            })
        }
    })
}
// //修改信息
exports.ChangeXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        const {ChangeBy,Xinxi} = content;
        // console.log(Xinxi)
        Yishengxinxi.update(ChangeBy,{$set:Xinxi},function(err,content){
            if(!err){
                console.log("修改医生信息成功！！");
                Yishengxinxi.find().exec(function(err,content){
                    res.json({"result":content})
                })
            }
        })
    })
}
//查找信息
exports.FindXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        const {Tiaojian} = content;
        //将字符串真的变为正则
        // console.log(typeof Tiaojian);
        var keywordRegExp = new RegExp( Tiaojian, "g");
        //查询对象
        var CHAXUN = {
            "$or" : [
                // {"bianhao" : keywordRegExp},
                {"mingcheng" : keywordRegExp}
            ]
        };
        // console.log(CHAXUN)
        Yuancailiao.find(CHAXUN).sort().exec(function(err,content){
            if(!err){
                console.log("查找医生信息成功!!");
                console.log(content)
                res.json({"result":content});
            }
        })
    })
}
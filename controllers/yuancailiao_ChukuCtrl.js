var Yuancailiao_Chuku = require("../models/Yuancailiao_Chuku.js");
var formidable = require("formidable");

// //获取信息
exports.GetXinxi = function(req,res){
    Yuancailiao_Chuku.find().exec(function(err,content){
        if(!err){
            // console.log(content)
            console.log("获取原材料出库信息成功!!");
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
        Yuancailiao_Chuku.create(xinxi,function(err,content){
            if(!err){
                console.log("添加原材料出库信息成功!!");
                console.log(content)
                Yuancailiao_Chuku.find().exec(function(err,content){
                    // console.log(content)
                    res.json({"result":content})
                })
            }
        })
    })
}
//删除信息
exports.DeleteXinxi = function(req,res){
    var id = req.params.id;
    console.log(id)
    Yuancailiao_Chuku.remove({"_id":id}).exec(function(err,content){
        if(!err){
            console.log("删除原材料出库信息成功！！");
            Yuancailiao_Chuku.find().exec(function(err,content){
                res.json({"result":content})
            })
        }
    })
}
// //修改信息
exports.ChangeXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        const {_id,Xinxi} = content;
        Yuancailiao_Chuku.update({_id},Xinxi,function(err,content){
            if(!err){
                console.log("修改原材料出库信息成功！！");
                Yuancailiao_Chuku.find().exec(function(err,content){
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
        console.log(CHAXUN)
        Yuancailiao_Chuku.find(CHAXUN).sort().exec(function(err,content){
            if(!err){
                console.log("查找原材料出库信息成功!!");
                console.log(content)
                res.json({"result":content});
            }
        })
    })
}
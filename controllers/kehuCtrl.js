var Kehu = require("../models/Kehu");
var formidable = require("formidable");

//获取信息
exports.getKehu = function(req,res){
    Kehu.find().sort({"id":1}).exec(function(err,content){
        // console.log(docs)
        res.json({"result":content})
    })
    
}
//添加信息
exports.AddXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        //获取信息
        var kehu = content.kehu;
        var xinxi = content.xinxi;
        //id自动+1
        var id = kehu.reduce(function(a,b){
            return b.id>a?b.id :a
        },0)+1;
        xinxi.id = id;
        Kehu.create(xinxi,function(err,content){
                console.log("添加客户信息成功!!");
                Kehu.find().sort({"id":1}).exec(function(err,content){
                    res.json({"result":content})
                })
        })
    })
}
// 删除信息
exports.DeleteXinxi = function(req,res){
    var id = req.params.id;
    Kehu.remove({id},function(err,content){
        if(!err){
            console.log("删除客户信息成功!!");
            Kehu.find().sort({"id":1}).exec(function(err,content){
                res.json({"result":content})
            })
        }
    })
    // console.log(id)
}
//修改信息
exports.ChangeXinxi = function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,content){
        const {nowid,nowname,value,kehu} = content.action;
        Kehu.find({"id":nowid},function(err,docs){
            var newdocs = docs[0];
            newdocs[nowname] = value;
            newdocs.save(function(err){
                if(!err){
                    console.log("修改客户信息成功!!");
                    Kehu.find().sort({"id":1}).exec(function(err,content){
                        // console.log(content)
                        res.json({"result":content})
                    })
                }
            })

        })
    })
}
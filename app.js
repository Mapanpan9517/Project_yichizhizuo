var express = require("express");
var app = express();

var kehuCtrl = require("./controllers/kehuCtrl.js");
var yuangongCtrl = require("./controllers/yuangongCtrl.js");
var yuancailiao_RukuCtrl = require("./controllers/yuancailiao_RukuCtrl.js");
var chanpingfenleiCtrl = require("./controllers/chanpingfenleiCtrl.js");
var chanpingdingyiCtrl = require("./controllers/chanpingdingyiCtrl.js");
var zhucaixinxiCtrl = require("./controllers/zhucaixinxiCtrl.js");
var yuancailiao_ChukuCtrl = require("./controllers/yuancailiao_ChukuCtrl.js");
var kucunrizhiCtrl = require("./controllers/kucunrizhiCtrl.js");
var yiyuanxinxiCtrl = require("./controllers/yiyuanxinxiCtrl.js");
var yishengxinxiCtrl = require("./controllers/yishengxinxiCtrl.js");
var dingdanxinxiCtrl = require("./controllers/dingdanxinxiCtrl.js");
var dengluzhuceCtrl = require("./controllers/dengluzhuceCtrl.js");

var mongoose = require("mongoose");
//链接数据库，localhost/yich表示链接到yichi数据库
mongoose.connect("localhost/yichi");
// console.log(mongoose)
app.post("/denglu",dengluzhuceCtrl.checkDengluXinxi);
app.post("/zhuce",dengluzhuceCtrl.checkZhuceXinxi);
//订单
app.get("/dingdanxinxiGet",dingdanxinxiCtrl.GetXinxi);
app.get("/dingdanxinxiDelete/:id",dingdanxinxiCtrl.DeleteXinxi);
app.post("/dingdanxinxiAdd",dingdanxinxiCtrl.AddXinxi);
app.post("/dingdanxinxiChange",dingdanxinxiCtrl.ChangeXinxi);
app.post("/dingdanxinxiFind",dingdanxinxiCtrl.FindXinxi);
//产品分类
app.get("/chanpingfenleiGet",chanpingfenleiCtrl.GetXinxi);
app.post("/chanpingfenleiAdd",chanpingfenleiCtrl.AddXinxi);
app.post("/chanpingfenleiChange",chanpingfenleiCtrl.ChangeXinxi);
app.get("/chanpingfenleiDelete/:id",chanpingfenleiCtrl.DeleteXinxi);
//产品定义
app.get("/chanpingdingyiGet",chanpingdingyiCtrl.GetXinxi);
app.get("/chanpingdingyiDelete/:id",chanpingdingyiCtrl.DeleteXinxi);
app.post("/chanpingdingyiAdd",chanpingdingyiCtrl.AddXinxi);
app.post("/chanpingdingyiChange",chanpingdingyiCtrl.ChangeXinxi);
// app.post("/chanpingdingyiFind",chanpingdingyiCtrl.FindXinxi);

//医院信息
app.get("/yiyuanxinxiGet",yiyuanxinxiCtrl.GetXinxi);
app.get("/yiyuanxinxiDelete/:id",yiyuanxinxiCtrl.DeleteXinxi);
app.post("/yiyuanxinxiAdd",yiyuanxinxiCtrl.AddXinxi);
app.post("/yiyuanxinxiChange",yiyuanxinxiCtrl.ChangeXinxi);
app.post("/yiyuanxinxiFind",yiyuanxinxiCtrl.FindXinxi);

//医生信息
app.get("/yishengxinxiGet",yishengxinxiCtrl.GetXinxi);
app.get("/yishengxinxiDelete/:id",yishengxinxiCtrl.DeleteXinxi);
app.post("/yishengxinxiAdd",yishengxinxiCtrl.AddXinxi);
app.post("/yishengxinxiChange",yishengxinxiCtrl.ChangeXinxi);
app.post("/yishengxinxiFind",yishengxinxiCtrl.FindXinxi);


app.post("/yuangongAdd",yuangongCtrl.AddXinxi);
app.get("/yuangongGet",yuangongCtrl.GetXinxi);
app.get("/yuangongDelete/:id",yuangongCtrl.DeleteXinxi);
app.post("/yuangongChange",yuangongCtrl.ChangeXinxi);
//主材信息
app.get("/zhucaixinxiGet",zhucaixinxiCtrl.GetXinxi);
app.get("/zhucaixinxiDelete/:id",zhucaixinxiCtrl.DeleteXinxi);
app.post("/zhucaixinxiAdd",zhucaixinxiCtrl.AddXinxi);
app.post("/zhucaixinxiChange",zhucaixinxiCtrl.ChangeXinxi);
app.post("/zhucaixinxiFind",zhucaixinxiCtrl.FindXinxi);
//原材料入库
app.get("/yuancailiao_RukuGet",yuancailiao_RukuCtrl.GetXinxi);
app.get("/yuancailiao_RukuDelete/:id",yuancailiao_RukuCtrl.DeleteXinxi);
app.post("/yuancailiao_RukuAdd",yuancailiao_RukuCtrl.AddXinxi);
app.post("/yuancailiao_RukuChange",yuancailiao_RukuCtrl.ChangeXinxi);
app.post("/yuancailiao_RukuFind",yuancailiao_RukuCtrl.FindXinxi);
//原材料出库
app.get("/yuancailiao_ChukuGet",yuancailiao_ChukuCtrl.GetXinxi);
app.get("/yuancailiao_ChukuDelete/:id",yuancailiao_ChukuCtrl.DeleteXinxi);
app.post("/yuancailiao_ChukuAdd",yuancailiao_ChukuCtrl.AddXinxi);
app.post("/yuancailiao_ChukuChange",yuancailiao_ChukuCtrl.ChangeXinxi);
app.post("/yuancailiao_ChukuFind",yuancailiao_ChukuCtrl.FindXinxi);
//库存日志
app.post("/kucunrizhiGet",kucunrizhiCtrl.GetXinxi);


app.listen(3000);
app.use(express.static("www"));
console.log("*********程序运行在3000端口*********");
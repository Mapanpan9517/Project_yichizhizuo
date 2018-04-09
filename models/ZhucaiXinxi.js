var mongoose = require("mongoose");
 
module.exports = mongoose.model("ZhucaiXinxi",{
    "mingcheng":String,
    "pinpai":String,
    "kucunshuliang":String,
    "zhucehao":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
var mongoose = require("mongoose");
 
module.exports = mongoose.model("Yiyuanxinxi",{
    "mingcheng":String,
    "lianxiren":String,
    "dianhua":String,
    "dizhi":String,
    "jieshao":String,
    "isshenhe":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
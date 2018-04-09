var mongoose = require("mongoose");
 
module.exports = mongoose.model("Dingdanxinxi",{
    "dingdanleixing":String,
    "dingdanzhuangtai":String,
    "zhifujiage":String,
    "zhifuzhuangtai":String,
    "shifoushidai":String,
    "yiyuanxinxi":String,
    "yishengxinxi":String,
    "chanpin":String,
    "hewei":String,
    "yawei":String,
    "jiagongshuliang":String,
    "jiaohuoshijian":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
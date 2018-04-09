var mongoose = require("mongoose");
 
module.exports = mongoose.model("ChanpingDingyi",{
    "mingcheng":String,
    "fenlei":String,
    "danwei":String,
    "cailiao":String,
    "jiage":String,
    "shuoming":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
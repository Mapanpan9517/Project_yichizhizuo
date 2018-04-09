var mongoose = require("mongoose");
 
module.exports = mongoose.model("Yishengxinxi",{
    "xingming":String,
    "dianhua":String,
    "suoshuzhensuo":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
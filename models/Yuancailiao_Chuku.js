var mongoose = require("mongoose");

module.exports = mongoose.model("Yuancailiao_Chuku",{
    "zhucai":String,
    "shuliang":String,
    "chukushuliang":String,
    "jingbanren":String,
    "chukushijian":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
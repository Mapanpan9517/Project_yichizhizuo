var mongoose = require("mongoose");

module.exports = mongoose.model("Yuancailiao_Ruku",{
    "zhucai":String,
    "pici":String,
    "danjia":String,
    "jingxiaoshang":String,
    "jingbanren":String,
    "rukushijian":String,
    "shuliang":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
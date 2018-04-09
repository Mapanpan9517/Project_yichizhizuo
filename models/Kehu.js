var mongoose = require("mongoose");

module.exports = mongoose.model("Kehu",{
    "id":Number,
    "mingcheng":String,
    "yewu":String,
    "bianma":String,
    "dianhua":String,
    "xukezhenghao":String,
    "diqu":String,
    "guojia":String,
    "guimo":String,
    "beizhu":String
})
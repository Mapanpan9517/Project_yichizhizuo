var mongoose = require("mongoose");

module.exports = mongoose.model("Yuangong",{
    "gonghao":Number,
    "xingming":String,
    "xingbie":String,
    "nianling":String,
    "chushengriqi":String,
    "shenfenzhenghao":Number,
    "shoujihao":Number,
    "daogangshijian":String
})
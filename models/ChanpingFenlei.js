var mongoose = require("mongoose");
 
module.exports = mongoose.model("ChanpingFenlei",{
    "mingcheng":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
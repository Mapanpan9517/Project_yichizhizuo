var mongoose = require("mongoose");
 
module.exports = mongoose.model("Admin",{
    "userName":String,
    "password":String,
    "chuangjianshijian":String,
    "gengxinshijian":String
})
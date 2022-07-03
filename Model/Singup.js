const mongoose = require("mongoose")

const contact = mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports = mongoose.model("contact",contact   )
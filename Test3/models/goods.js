var mongoose = require('mongoose')

var Schema = mongoose.Schema

var goodSchema = new Schema({
    // names:{
    //     type:String,
    // },
    name:String,
    price:{
        type:String,
        required:true
    },
    detail:{
        type:String,
    },
    date:{
        type:Date
    },
    p_url:{
        type:String
    },
    category:{
        type:String
    }
})

module.exports = mongoose.model('Good', goodSchema)
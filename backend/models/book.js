

const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const bookSchema = new Schema ({
    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
let bookData =mongoose.model('book', bookSchema)
module.exports = bookData;
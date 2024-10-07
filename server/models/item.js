const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema
({
    title : String,
    description : String
})

const itemModel = mongoose.model("Item" , itemSchema)

module.exports = itemModel
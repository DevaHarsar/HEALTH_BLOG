const express = require('express')
const connectDb = require('./db')
const itemModel = require('./models/item')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())

connectDb();

app.get('/' , async (req,res) => {
    const response = await itemModel.find()
    return res.json({items : response})
})

app.

app.listen(3333 , () => {
    console.log("App is running")
})
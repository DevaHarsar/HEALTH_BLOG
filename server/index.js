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


app.post('/add', async (req, res) => {
    try {
      const newItem = new itemModel({
        title: req.body.title,
        description: req.body.description,
        imageURL: req.body.imageURL,
      });
  
      const savedItem = await newItem.save();
      return res.status(201).json({ message: 'Item added successfully', item: savedItem });
    } catch (error) {
      return res.status(400).json({ error: 'Error adding item' });
    }
  });


app.listen(3333 , () => {
    console.log("App is running")
})
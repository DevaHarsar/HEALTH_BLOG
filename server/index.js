
const express = require('express');
const connectDb = require('./db');
const itemModel = require('./models/item');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json({ limit: '50mb' }));  
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.use(cors({ 
<<<<<<< HEAD
    // origin: 'http://localhost:5173',
    origin:'https://health-blog-beta.vercel.app',
=======
   // origin: 'http://localhost:5173',
    origin:'https://health-blog-beta.vercel.app/',
>>>>>>> bdd806646d15e906d773c7c5ffcf43ed4a0ffdd5
    methods: ['GET', 'POST'],
     credentials: true,

    
 })); 


connectDb();


app.get('/', async (req, res) => {
    try {
        const response = await itemModel.find();
        return res.json({ items: response });
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching items' });
    }
});


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


app.get('/:id', async (req, res) => {
    try {
        const blog = await itemModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        return res.json(blog);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching blog post' });
    }
});


app.delete('/:id', async (req, res) => {
    try {
        const deleteItem = await itemModel.findByIdAndDelete(req.params.id);
        if (!deleteItem) {
            return res.status(404).json({ error: 'Blog post deleted' });
        }
        return res.json(deleteItem);
    } catch (error) {
        return res.status(500).json({ error: 'Error deleting' });
    }
});


app.listen(3333, () => {
    console.log("App is running on port 3333");
});

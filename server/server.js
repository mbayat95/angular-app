const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Data = require('./models/dataModel');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test')
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.error('Could not connect to MongoDB...', err));

// Define routes
app.get('/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.post('/data', async (req, res) => {
    try {
        const newData = new Data({ data: req.body.data });
        await newData.save();
        res.send(newData);
    } catch (error) {
        res.status(500).send(error);
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

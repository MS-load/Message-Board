const express = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const app = express()
const port = process.env.PORT || 3000

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database connected:')
});

app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Hello World app listening at http://localhost:${port}`))
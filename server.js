const express = require('express')
const monogdb = require('mongodb')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Hello World app listening at http://localhost:${port}`))
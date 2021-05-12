const express = require('express')
const db = require('./db')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/r",require('./routes/resource'))

db()

app.listen(port, () => {
  console.log(`Express listening at http://localhost:${port}`)
})

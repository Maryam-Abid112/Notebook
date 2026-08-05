const connecttomongo=require('./db');

connecttomongo();

const express = require('express');
const app = express()
const port = 3000

app.use(express.json()); // basically for parsing the json data or u can say request body data
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth',require('./Routes/Auth'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

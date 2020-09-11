const express = require('express')

const port = process.env.PORT || 4000;
const app = express()


app.get('/', (req, res)=> {
  res.send('hello')
})

app.listen(port, ()=> {
  console.log(`Api is running on port ${port}`)
})
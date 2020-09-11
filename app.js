const express = require('express')
const bodyParser = require("body-parser");

const port = process.env.PORT || 4000;
const app = express()

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=> {
  res.send('hello')
})
require("./routes/user.routes.js")(app);
app.listen(port, ()=> {
  console.log(`Api is running on port ${port}`)
})
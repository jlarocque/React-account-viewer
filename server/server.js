const express = require('express')
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');
const PORT = process.env.PORT || 4000;

const app = express();
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.send("server is working");
});

app.listen(PORT, function(){
  console.log(`App running on localhost:${PORT}`);
});
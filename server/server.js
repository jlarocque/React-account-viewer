const sqlite3 = require('sqlite3');
const express = require('express')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const dbPath = path.resolve(__dirname, '../db/accounts.db')

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
});

const app = express();

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '/../client/dist')))

app.get('/all', function(req,res){
  db.all('SELECT * FROM accounts', (err, data) =>{
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      res.send(data)
    }
  })
});

app.listen(PORT, function(){
  console.log(`App running on localhost:${PORT}`);
});


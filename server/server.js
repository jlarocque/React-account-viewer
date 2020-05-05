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

app.get('/approved', function(req,res){
  db.all('SELECT * FROM accounts WHERE credit >= 600', (err, data) =>{
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      res.send(data)
    }
  })
});

app.get('/denied', function(req,res){
  db.all('SELECT * FROM accounts WHERE credit < 600', (err, data) =>{
    if (err) {
      console.log(err)
      res.sendStatus(404)
    } else {
      res.send(data)
    }
  })
});

app.post('/', (req, res) => {
  db.run(`INSERT INTO accounts (id, balance, credit, picture, name_first, name_last, employer, email, phone, address, comments, created, tags)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )`, [id, balance, credit, picture, name_first, name_last, employer, email, phone, address, comments, created, tags], (err, data) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
})

app.delete('/:id', (req, res) => {
  let id = req.params.id
  db.run(`DELETE FROM accounts WHERE id = ${id}`)
})

app.listen(PORT, function(){
  console.log(`App running on localhost:${PORT}`);
});


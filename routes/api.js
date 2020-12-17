const router = require('express').Router();
const dataBase = require('../db/db.json')
const fs = require('fs');
const { json } = require('express');

    router.get('/notes', (req, res) => {
        fs.readFile('db/db.json', (err, data) => {
            if (err) throw err;
            let parseData = JSON.parse(data);
            //console.log(parseData)
            res.json (parseData)
          }); 
  })
        
  
    



module.exports = router
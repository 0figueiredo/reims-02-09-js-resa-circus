const express = require('express');

const app = express();
const port = 8000;

const connection = require('./conf');

//get all the circus
app.get('/circus', (req, res) => {
    connection.query('SELECT * FROM circus', (err, results) => {
        if (err) {
            res.status(500).send(`Erreur lors de la récupération des cirques : ${err}`);
        }else {
            res.json(results);
        }
    })
});


//get circus by id
app.get('/circus/:id', (req, res) =>{
    const idCircus = req.params.id;
    connection.query('SELECT * FROM circus WHERE id= ?', [idCircus], (err, datas) => {
        if (err){
            res.status(500).send(`Erreur lors de la récupération du cirque: ${err}`);
        }else {
            res.json(datas);
        }
    })
})

//get all the regions
app.get('/regions', (req, res) =>{
    connection.query('SELECT * FROM region', (err, datas) => {
        if (err){
            res.status(500).send(`Erreur lors de la récupération du cirque: ${err}`);
        }else {
            res.json(datas);
        }
    })
})

//get all the circus by region
app.get('/regions/:id/circus', (req, res) =>{
    const idRegion = req.params.id;
    connection.query('SELECT * FROM circus WHERE region_id = ?', [idRegion], (err, datas) => {
        if (err){
            res.status(500).send(`Erreur lors de la récupération des cirques: ${err}`);
        }else {
            res.json(datas);
        }
    })
})


app.listen(port, (err) => {
    if (err){
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});

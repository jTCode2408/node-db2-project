//router for cars data
const express = require('express');
const knex = require('knex');
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/car-dealer.db3'
  },
  useNullAsDefault: true
});

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"could not get cars"})
        })
})

router.post('/', (req, res) => {
    db('cars').insert(req.body)
        .then(adding => {
            res.status(201).json('adding car with id '+ adding)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "could not get cars" })
        })
})

module.exports = router;
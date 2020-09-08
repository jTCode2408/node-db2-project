//router for cars data
const express = require('express');
const knex = require('knex');
const db = require('./data/dbConfig');

const router = express.Router();
router.use(express.json());
//get all cars
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
//get by id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db('cars').where({id})
        .then(car => {
            if (car.length) {
                res.status(200).json(car)
            } else {
                res.status(400).json({error:"car with specified ID not found"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"no car with specified ID found"})
    })
})
//add car
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

//edit car info
router.put('/:id', (req, res) => {
    const id = req.params.id
    db('cars').where({ id }).update(req.body)
        .then(carID => {
            if (carID) {
                res.status(201).json(req.body)
            } else {
                res.status(400).json({error:"car with specified ID not found"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"unable to edit car info"})
    })
})

//delete car
router.delete('/:id', (req, res) => {
    const id = req.params.id
    db('cars').where({ id }).del()
        .then(deleted => {
            if (deleted) {
                res.status(200).json(`deleted ${deleted} car`)
            } else {
                res.status(400).json({error:"car with specified ID not found"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:"unable to delete car"})
        })
})

module.exports = router;
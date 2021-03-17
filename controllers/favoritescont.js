const express = require('express')
const FAVORITES = express.Router()
const Favorite = require('../models/favoritesmod')

FAVORITES.get('/', (req, res)=> {
    Favorite.find({}, (err, foundFavorites)=> {
        if(err) {
            res.status(400).json({error : error.message})
        }
        res.status(200).json(foundFavorites)
    })
})

FAVORITES.post('/' , (req, res) => {
    Favorite.create(req.body, (err, createdFavorite) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).send(createdFavorite)
    })
})

FAVORITES.delete('/:id', (req, res)=> {
    Favorite.findByIdAndRemove(req.params.id, (err, deletedFavorite) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(deletedFavorite)
    })
})

FAVORITES.put('/:id', (req,res)=> {
    Favorite.findByIdAndUpdate(req.params.id, req.body, {new : true}, (err, updatedFavorite) => {
        if(err) {
            res.status(400).json({error : err.message})
        }
        res.status(200).json(updatedFavorite)
    })
})




module.exports = FAVORITES
const express = require('express')
<<<<<<< HEAD:controllers/favoritescont.js
const FAVORITES = express.Router()
const Favorite = require('../models/favoritesmod')
=======
const profileRouter = express.Router();
const Profile = require('/models/profile');
>>>>>>> 1b729c1311a4a858678cb10335fbf63f758711d3:controllers/profile.js

profileRouter.get('/', (req, res)=> {
    Profile.find({}, (err, foundFavorites)=> {
        if(err) {
            res.status(400).json({error : error.message})
        }
        res.status(200).json(foundFavorites)
    })
})

<<<<<<< HEAD:controllers/favoritescont.js
FAVORITES.post('/' , async (req, res) => {
    Favorite.create(req.body, (err, createdFavorite) => {
=======
profileRouter.post('/' , (req, res) => {
    Profile.create(req.body, (err, createdFavorite) => {
>>>>>>> 1b729c1311a4a858678cb10335fbf63f758711d3:controllers/profile.js
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).send(createdFavorite)
    })
})

profileRouter.delete('/:id', (req, res)=> {
    Profile.findByIdAndRemove(req.params.id, (err, deletedFavorite) => {
        if(err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json(deletedFavorite)
    })
})

profileRouter.put('/:id', (req,res)=> {
    Profile.findByIdAndUpdate(req.params.id, req.body, {new : true}, (err, updatedFavorite) => {
        if(err) {
            res.status(400).json({error : err.message})
        }
        res.status(200).json(updatedFavorite)
    })
})




module.exports = profileRouter;
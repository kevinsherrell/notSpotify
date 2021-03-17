const express = require('express')
const profileRouter = express.Router();
const Profile = require('/models/profile');

profileRouter.get('/', (req, res)=> {
    Profile.find({}, (err, foundFavorites)=> {
        if(err) {
            res.status(400).json({error : error.message})
        }
        res.status(200).json(foundFavorites)
    })
})

profileRouter.post('/' , (req, res) => {
    Profile.create(req.body, (err, createdFavorite) => {
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
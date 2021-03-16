const mongoose = require('mongoose')

const favoriteSchema = mongoose.Schema({
    name: String,
    followers: String,
    genres: [{type:String}], 
    image: String,

})

module.exports = mongoose.model('Favorite', favoriteSchema)
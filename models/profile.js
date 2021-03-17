const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    favorites: {
        type: [
            mongoose.Types.ObjectId
        ],
    }
})

module.exports = mongoose.model('profile', profileSchema)
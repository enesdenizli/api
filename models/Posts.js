const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    postDate: {
        type: Date,
        require: true,
        default: Date.now,
    },
})

module.exports = mongoose.model('post', PostSchema)
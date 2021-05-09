const Post = require('../models/Posts')

const DeletePost = async (req, res, next) => {
    try{
        const id = req.query.id
        const result = await Post.findByIdAndDelete(id)
        res.send(result)
    } catch(e) {
        res.status(400).send('You are missing something!')
    }
}

module.exports = DeletePost
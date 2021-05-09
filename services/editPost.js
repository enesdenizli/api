const Post = require('../models/Posts')

const EditPost = async (req, res, next) => {
    try{
        const id = req.query.id
        const title = req.body.title
        const content = req.body.content
        const result = await Post.findByIdAndUpdate(id, { title, content } )
        res.send(result)
        console.log(title, content)
    } catch(e) {
        res.status(400).send('You are missing something!')
    }
}

module.exports = EditPost
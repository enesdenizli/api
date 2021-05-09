const Post = require('../models/Posts')

const CreatePost = async (req, res, next) => {
    try {
        const post = new Post({
            title: req.body.title,
            content: req.body.content,
            postDate: req.body.postDate,
        })
        const result =  await post.save()
        res.send(result)
    } catch(e) {
        res.status(400).send('You are missing something!')
    }
}

module.exports = CreatePost
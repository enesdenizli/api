const Post = require('../models/Posts')

const GetPosts = async (req, res, next) => {
    const posts = await Post.find()
    res.send(posts)
}

module.exports = GetPosts
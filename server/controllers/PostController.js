import Post from "../models/Post.js"

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        res.status(200).json(posts)
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
}

const createPost = async (req, res) => {
    const post = new Post(req.body)

    try {
        await post.save()

        res.status(201).json({
            message: "Post created successfully!",
            data: post
        })
    } catch (e) {
        res.status(409).json({
            message: e.message
        })
    }
}

export default {
    getPosts,
    createPost
}
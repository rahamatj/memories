import post from "../models/post.js"

const getPosts = async (req, res) => {
    try {
        const posts = await post.find()

        res.status(200).json(posts)
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
}

export default {
    getPosts
}
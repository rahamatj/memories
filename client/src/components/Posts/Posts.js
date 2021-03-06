import { useSelector } from "react-redux"

import Post from "./Post/Post"

import useStyles from "./styles"

const Posts = () => {
    const classes = useStyles()

    const posts = useSelector((state) => state.posts)

    return (
        <>
            <h1>Posts</h1>
            <Post/>
        </>
    )
}

export default Posts
import express from "express"

import PostController from "../controllers/PostController.js"

const router = express.Router()

router.get("/", PostController.getPosts)
router.post("/", PostController.createPost)

export default router
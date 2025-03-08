import express from "express"
import protectRoute from "../middleware/protectRoute.js"
import {createPost, deletePost, createComment, likeUnlikePost, getAllPosts, getLikedPosts, getFollowingPosts, getUserPosts } from "../controllers/post.control.js"

const router = express.Router()

router.get("/all",protectRoute, getAllPosts)
router.get("/following", protectRoute, getFollowingPosts);
router.get("/likes/:id", protectRoute, getLikedPosts)
router.post("/create", protectRoute, createPost)
router.post("/like/:id", protectRoute, likeUnlikePost)
router.post("/comment/:id", protectRoute, createComment)
router.delete("/:id", protectRoute, deletePost)
router.get("/user/:username", protectRoute, getUserPosts);



export default router;
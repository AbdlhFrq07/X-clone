import express from "express"

import {signup,login, logout, getMe } from "../controllers/auth.control.js"

import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)
router.get("/me", protectRoute, getMe) //takes the cookie and validate whether the user is in the database

export default router
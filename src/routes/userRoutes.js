import express from "express";
import { register } from "../controllers/userControllers.js";
import { registerUserSchema } from "../schemas/userSchemas.js";

const router = express.Router();
router.post("/auth/register", register);
export default router;

import express from "express";
import { login, register } from "../controllers/userControllers.js";
import { loginUserSchema, registerUserSchema } from "../schemas/userSchemas.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();
router.post("/auth/register", validate(registerUserSchema), register);
router.post("/auth/login", validate(loginUserSchema), login);
export default router;

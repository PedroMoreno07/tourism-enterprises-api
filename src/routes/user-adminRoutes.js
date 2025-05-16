import express from "express";
import {
  login,
  register,
  registerAdmin,
} from "../controllers/userControllers.js";
import {
  loginUserSchema,
  registerAdminSchema,
  registerUserSchema,
} from "../schemas/userSchemas.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();
router.post("/register", validate(registerUserSchema), register);
router.post("/register-admin", validate(registerAdminSchema), registerAdmin);
router.post("/login", validate(loginUserSchema), login);
export default router;

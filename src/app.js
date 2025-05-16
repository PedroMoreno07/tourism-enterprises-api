import express from "express";
import userAdminRouter from "./routes/user-adminRoutes.js";
import { validate } from "./middleware/validate.js";
import { registerUserSchema } from "./schemas/userSchemas.js";
const app = express();

app.use(express.json());

app.use("/auth", userAdminRouter);
export default app;

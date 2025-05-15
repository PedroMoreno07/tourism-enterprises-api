import express from "express";
import userRouter from "./routes/userRoutes.js";
import { validate } from "./middleware/validate.js";
import { registerUserSchema } from "./schemas/userSchemas.js";
const app = express();

app.use(express.json());

app.use("/users", validate(registerUserSchema), userRouter);
export default app;

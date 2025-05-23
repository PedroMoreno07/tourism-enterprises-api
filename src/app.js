import express from "express";
import userAdminRouter from "./routes/user-adminRoutes.js";
import placesRouter from "./routes/placeRoutes.js";
import { validate } from "./middleware/validate.js";
import { registerUserSchema } from "./schemas/userSchemas.js";
import { authenticate } from "./middleware/authentication.js";
const app = express();

app.use(express.json());

app.use("/auth", userAdminRouter);
app.use("/places", placesRouter);
export default app;

import express from "express";
import { validate } from "../middleware/validate.js";
import {
  placeCreateSchemas,
  placeUpdateSchemas,
} from "../schemas/placeSchemas.js";
import {
  createPlace,
  getAllPlaces,
  getPlaceByType,
  updatePlace,
} from "../controllers/placeControllers.js";
import { authenticate } from "../middleware/authentication.js";
import { isAdmin } from "../middleware/is-admin.js";

const router = express.Router();

router.post("/", isAdmin, validate(placeCreateSchemas), createPlace);
router.get("/", authenticate, getAllPlaces);
router.get("/:type", authenticate, getPlaceByType);
router.put("/:id", isAdmin, validate(placeUpdateSchemas), updatePlace);

export default router;

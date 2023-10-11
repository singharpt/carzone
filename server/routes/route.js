import express from "express";
const router = express.Router();

import cars from "../controllers/cars.js";
import getAllInteriors from "../controllers/interiors.js";
import getAllExteriors from "../controllers/exteriors.js";
import getAllWheels from "../controllers/wheels.js";
import getAllRoofs from "../controllers/roofs.js";

/* GET all static data */
router.get("/interiors", getAllInteriors);
router.get("/exteriors", getAllExteriors);
router.get("/roofs", getAllRoofs);
router.get("/wheels", getAllWheels);
router.get("/getcars", cars.getAllCars);

/* CRUD Operations on cars */
router.post("/createcars", cars.postCars);
router.patch("/patchcars", cars.patchCars);
router.delete("/deletecars", cars.deleteCars);

export default router;

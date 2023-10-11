import express from "express";
const router = express.Router();

import locations from "../controllers/locations.js";
import events from "../controllers/events.js";

/* GET all locations */
router.get("/locations", locations);

/* GET all events */
router.get("/events", events.getAllEvents);

/* GET all events for unique location page. */
router.get("/events/:locationId", events.getUniqueEvents);

export default router;

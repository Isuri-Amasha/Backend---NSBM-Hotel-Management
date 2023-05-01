const router = require('express').Router();
const { response } = require('express');
let Event = require("../models/events.model");

const {
    addEvent,
    getEvents,
    updateEvent,
    getEventById,
    deleteEvent
   
  } = require("../controller/events.controller");

  router.post("/", addEvent);

  router.get("/", getEvents);

  router.get("/:id", getEventById);

  router.put("/:id", updateEvent);

  router.delete("/:id", deleteEvent);

module.exports = router;
const router = require('express').Router();
const { response } = require('express');
let Room = require("../models/room.model");

const {
    addRoom,
    getRooms,
    updateRoom,
    getRoomById,
    deleteRoom
   
  } = require("../controller/room.controller");

  router.post("/", addRoom);

  router.get("/", getRooms);

  router.get("/:id", getRoomById);

  router.put("/:id", updateRoom);

  router.delete("/:id", deleteRoom);

module.exports = router;
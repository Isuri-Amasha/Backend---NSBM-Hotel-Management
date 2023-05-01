const router = require('express').Router();
const { response } = require('express');
let Wedding = require("../models/weddingHall.model");

const {
    addWedding,
    getWeddings,
    updateWedding,
    getWeddingById,
    deleteWedding
   
  } = require("../controller/weddingHall.controller");

  router.post("/", addWedding);

  router.get("/", getWeddings);

  router.get("/:id", getWeddingById);

  router.put("/:id", updateWedding);

  router.delete("/:id", deleteWedding);

module.exports = router;
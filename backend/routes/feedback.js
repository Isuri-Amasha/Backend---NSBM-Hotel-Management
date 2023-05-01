const router = require('express').Router();
const { response } = require('express');
let Feedback = require("../models/feedback.model");

const {
    addFeedback,
    getFeedbacks,
    updateFeedback,
    getFeedbackById,
    deleteFeedback,
    addResponse
   
  } = require("../controller/feedback.controller");

  router.post("/", addFeedback);

  router.get("/", getFeedbacks);

  router.get("/:id", getFeedbackById);

  router.put("/:id", updateFeedback);

  router.put("/response/:id", addResponse);

  router.delete("/:id", deleteFeedback);

module.exports = router;
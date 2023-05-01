const Feedback = require("../models/feedback.model");

const addFeedback = async (req, res) => {
    const { course,student,rating,feedback} =
      req.body;
  
    const newfeedback = new Feedback({
        course,
        student,
        rating,
        feedback
    });
  
    await newfeedback
      .save()
      .then(() => res.json('Feedback added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getFeedbacks = async (req, res) => {
    try {
      const feedback = await Feedback.find();
      res.json(feedback);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getFeedbackById = async (req, res) => {
    try {
      const feedback = await Feedback.findById(req.params.id);
      res.json(feedback);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateFeedback = async (req, res) => {
    Feedback.findByIdAndUpdate(req.params.id)
      .then((existingFeedback) => {
        existingFeedback.course = req.body.course;
        existingFeedback.student = req.body.student;
        existingFeedback.rating = req.body.rating;
        existingFeedback.feedback = req.body.feedback;
        existingFeedback.response = req.body.response;
        
        existingFeedback
          .save()
          .then(() => res.json('Feedback updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const addResponse = async (req, res) => {
    Feedback.findByIdAndUpdate(req.params.id)
      .then((existingFeedback) => {
        existingFeedback.course = req.body.course;
        existingFeedback.student = req.body.student;
        existingFeedback.rating = req.body.rating;
        existingFeedback.feedback = req.body.feedback;
        existingFeedback.response = req.body.response;
        
        existingFeedback
          .save()
          .then(() => res.json('Response Added!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const deleteFeedback = async (req, res) => {
    Feedback.findByIdAndDelete(req.params.id)
      .then((deletedFeedback) => {
        res.json('Feedback deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  
  module.exports = {
    addFeedback,
    getFeedbacks,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
    addResponse
  
   
  }
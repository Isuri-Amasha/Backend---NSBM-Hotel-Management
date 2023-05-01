const Event = require("../models/events.model");

const addEvent = async (req, res) => {
    const { hotelName,hallName,description,style1,capacity1,style2,capacity2,style3,capacity3,style4,capacity4} =
      req.body;
  
    const newevent = new Event({
        hotelName,
        hallName,
        description,
        style1,
        capacity1,
        style2,
        capacity2,
        style3,
        capacity3,
        style4,
        capacity4
    });
  
    await newevent
      .save()
      .then(() => res.json('Events added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getEvents = async (req, res) => {
    try {
      const event = await Event.find();
      res.json(event);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getEventById = async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      res.json(event);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateEvent = async (req, res) => {
    Event.findByIdAndUpdate(req.params.id)
      .then((existingEvent) => {
        existingEvent.hotelName = req.body.hotelName;
        existingEvent.hallName = req.body.hallName;
        existingEvent.description = req.body.description;
        existingEvent.style1 = req.body.style1;
        existingEvent.capacity1 = req.body.capacity1;
        existingEvent.style2 = req.body.style2;
        existingEvent.capacity2 = req.body.capacity2;
        existingEvent.style3 = req.body.style3;
        existingEvent.capacity3 = req.body.capacity3;
        existingEvent.style4 = req.body.style4;
        existingEvent.capacity4 = req.body.capacity4;
        
        existingEvent
          .save()
          .then(() => res.json('Event Details updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const deleteEvent = async (req, res) => {
    Event.findByIdAndDelete(req.params.id)
      .then((deletedEvent) => {
        res.json('Event Details deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  
  module.exports = {
    addEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
  
   
  }
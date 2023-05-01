const Booking = require("../models/booking.model");

const addBooking = async (req, res) => {
    const { hotelName,roomName,userName,numofPeople,numofStays,numofRooms,price} =
      req.body;
  
    const newbooking = new Booking({
        hotelName,
        roomName,
        userName,
        numofPeople,
        numofStays,
        numofRooms,
        price
    });
  
    await newbooking
      .save()
      .then(() => res.json('Booking Details added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getBookings = async (req, res) => {
    try {
      const booking = await Booking.find();
      res.json(booking);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getBookingById = async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
      res.json(booking);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateBooking = async (req, res) => {
    Booking.findByIdAndUpdate(req.params.id)
      .then((existingBooking) => {
        existingBooking.hotelName = req.body.hotelName;
        existingBooking.roomName = req.body.roomName;
        existingBooking.userName = req.body.userName;
        existingBooking.numofPeople = req.body.numofPeople;
        existingBooking.numofStays = req.body.numofStays;
        existingBooking.numofRooms = req.body.numofRooms;
        existingBooking.price = req.body.price;
       

        
        existingBooking
          .save()
          .then(() => res.json('Booking Details updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const deleteBooking = async (req, res) => {
    Booking.findByIdAndDelete(req.params.id)
      .then((deletedBooking) => {
        res.json('Booking Details deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  
  module.exports = {
    addBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking
  
   
  }
const Payment = require("../models/payment.model");

const addPayment = async (req, res) => {
    const { bookingId,price,bankName,accName} =
      req.body;
  
    const newbooking = new Booking({
        bookingId,price,bankName,accName
    });
  
    await newbooking
      .save()
      .then(() => res.json('Payment Details added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

//   const addPaymentStatus = async (req, res) => {
//     Booking.findByIdAndUpdate(req.params.id)
//       .then((existingBooking) => {
//         existingBooking.paymentStatus = req.body.paymentStatus;
      
       

        
//         existingBooking
//           .save()
//           .then(() => res.json('Payment Details updated!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

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
        existingBooking.numofRooms = req.body.numofRooms;
        existingBooking.checkinDate = req.body.checkinDate;
        existingBooking.checkoutDate = req.body.checkoutDate;
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
    deleteBooking,
    addPaymentStatus
  
   
  }
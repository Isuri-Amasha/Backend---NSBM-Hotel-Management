const Booking = require("../models/booking.model");

//create booking
const addBooking = async (req, res) => {
  const { hotelName, roomName, userName, numofRooms, checkinDate, checkoutDate, price, paymentStatus, bankName, accName } =
    req.body;
  const newbooking = new Booking({
    hotelName,
    roomName,
    userName,
    numofRooms,
    checkinDate,
    checkoutDate,
    price,
    paymentStatus,
    bankName,
    accName

  });

  await newbooking
    .save()
    .then(() => res.json(newbooking._id))
    .catch((error) => res.status(400).json("Error: " + error));
};

const addPaymentStatus = async (req, res) => {
  Booking.findByIdAndUpdate(req.params.id)
    .then((existingBooking) => {
      existingBooking.paymentStatus = req.body.paymentStatus;
      existingBooking.accName = req.body.accName;
      existingBooking.bankName = req.body.bankName;
      existingBooking
        .save()
        .then(() => res.json('Payment Details updated!'))
        .catch((error) => res.status(400).json("Error: " + error));
    })
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
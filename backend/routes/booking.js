const router = require('express').Router();
const { response } = require('express');
let Booking = require("../models/booking.model");

const {
    addBooking,
    getBookings,
    updateBooking,
    getBookingById,
    deleteBooking,
    addPaymentStatus
   
  } = require("../controller/booking.controller");

  router.post("/", addBooking);

  router.get("/", getBookings);

  router.get("/:id", getBookingById);

  router.put("/:id", updateBooking);

  router.delete("/:id", deleteBooking);

  router.put("/payment/:id", addPaymentStatus);

module.exports = router;
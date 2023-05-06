const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    hotelName: { type: String, required: true },
    roomName: { type: String, required: true },
    userName: { type: String, required: true },
    numofRooms: { type: String, required: true },
    checkinDate: { type: String, required: true },
    checkoutDate: { type: String, required: true },
    price: { type: String },
    paymentStatus: { type: String },
    bankName: { type: String },
    accName: { type: String },

}, {
    timestamps: true,

});


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
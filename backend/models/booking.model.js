const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    hotelName : {type : String,required : true},
    roomName : {type : String,required : true},
    userName : {type : String,required : true},
    numofPeople: {type :String, required : true},
    numofStays: {type :String, required : true},
    numofRooms: {type :String, required : true},
    price: {type :String},
     
},{
        timestamps : true,
    
});


const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
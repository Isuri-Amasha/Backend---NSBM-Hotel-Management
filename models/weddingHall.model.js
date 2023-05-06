const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weddingSchema = new Schema({

    hotelName: { type: String, required: true },
    hallName: { type: String, required: true },
    imageURL: { type: String, required: true },
    description: { type: String, required: true },
    capacity: { type: String, required: true },
    length: { type: String, required: true },
    width: { type: String },
    price: { type: String },

}, {
    timestamps: true,

});


const Wedding = mongoose.model("Wedding", weddingSchema);

module.exports = Wedding;
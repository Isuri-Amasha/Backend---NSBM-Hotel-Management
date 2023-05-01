const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({

    hotelName : {type : String,required : true},
    roomName : {type : String,required : true},
    description : {type : String,required : true},
    size : {type : String,required : true},
    numofPeople: {type :String, required : true},
    view: {type :String},
    feature1: {type :String},
    feature2: {type :String},
    feature3: {type :String},
    feature4: {type :String},
    feature5: {type :String},
    feature6: {type :String},
    feature7: {type :String},
    feature8: {type :String},
    feature9: {type :String},
    feature10: {type :String},
    price: {type :String},
     
},{
        timestamps : true,
    
});


const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
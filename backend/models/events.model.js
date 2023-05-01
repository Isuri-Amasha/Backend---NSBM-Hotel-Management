const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({

    hotelName : {type : String,required : true},
    hallName : {type : String,required : true},
    description : {type : String,required : true},
    style1 : {type : String},
    capacity1 : {type : String},
    style2 : {type : String},
    capacity2 : {type : String},
    style3 : {type : String},
    capacity3 : {type : String},
    style4 : {type : String},
    capacity4 : {type : String},
   
     
},{
        timestamps : true,
    
});


const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
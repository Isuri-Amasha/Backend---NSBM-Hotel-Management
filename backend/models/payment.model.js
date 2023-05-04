const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    bookingId : {type : String,required : true},
    price : {type : String,required : true},
 
    bankName: {type :String, required : true},
    accName: {type :String, required : true},
   
     
},{
        timestamps : true,
    
});


const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

//mongo db connection
const uri = process.env.ATLAS_URI;
mongoose.connect (uri, { useNewUrlParser : true, useUnifiedTopology : true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongo DB connection established successfully");
})



const feedbackRouter = require('./routes/feedback');
const weddingHallRouter = require('./routes/weddingHall');
const eventRouter = require('./routes/events');
const roomRouter = require('./routes/room');
const bookingRouter = require('./routes/booking');
const UserRouter = require('./routes/user');

app.use('/feedback', feedbackRouter);
app.use('/weddingHall', weddingHallRouter);
app.use('/event', eventRouter);
app.use('/room', roomRouter);
app.use('/booking', bookingRouter);
app.use('/user', UserRouter);

app.listen(port, () => {
    console.log(`Server is running on port:-${port}`);
});
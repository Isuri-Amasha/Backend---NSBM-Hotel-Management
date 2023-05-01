const Room = require("../models/room.model");

const addRoom = async (req, res) => {
    const { hotelName,roomName,description,size,numofPeople,view,feature1,feature2,feature3,feature4,feature5,feature6,feature7,feature8,feature9,feature10,price} =
      req.body;
  
    const newroom = new Room({
        hotelName,
        roomName,
        description,
        size,
        numofPeople,
        view,
        feature1,
        feature2,
        feature3,
        feature4,
        feature5,
        feature6,
        feature7,
        feature8,
        feature9,
        feature10,
        price
    });
  
    await newroom
      .save()
      .then(() => res.json('Room Details added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getRooms = async (req, res) => {
    try {
      const room = await Room.find();
      res.json(room);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getRoomById = async (req, res) => {
    try {
      const room = await Room.findById(req.params.id);
      res.json(room);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateRoom = async (req, res) => {
    Room.findByIdAndUpdate(req.params.id)
      .then((existingRoom) => {
        existingRoom.hotelName = req.body.hotelName;
        existingRoom.roomName = req.body.roomName;
        existingRoom.description = req.body.description;
        existingRoom.size = req.body.size;
        existingRoom.numofPeople = req.body.numofPeople;
        existingRoom.view = req.body.view;
        existingRoom.feature1 = req.body.feature1;
        existingRoom.feature2 = req.body.feature2;
        existingRoom.feature3 = req.body.feature3;
        existingRoom.feature4 = req.body.feature4;
        existingRoom.feature5 = req.body.feature5;
        existingRoom.feature6 = req.body.feature6;
        existingRoom.feature7 = req.body.feature7;
        existingRoom.feature8 = req.body.feature8;
        existingRoom.feature9 = req.body.feature9;
        existingRoom.feature10 = req.body.feature10;

        
        existingRoom
          .save()
          .then(() => res.json('Room Details updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const deleteRoom = async (req, res) => {
    Room.findByIdAndDelete(req.params.id)
      .then((deletedRoom) => {
        res.json('Room Details deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  
  module.exports = {
    addRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom
  
   
  }
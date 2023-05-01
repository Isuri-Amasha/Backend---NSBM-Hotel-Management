const Wedding = require("../models/weddingHall.model");

const addWedding = async (req, res) => {
    const { hotelName,hallName,description,capacity,length,width,price} =
      req.body;
  
    const newwedding = new Wedding({
        hotelName,
        hallName,
        description,
        capacity,
        length,
        width,
        price
    });
  
    await newwedding
      .save()
      .then(() => res.json('Wedding Hall Details added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getWeddings = async (req, res) => {
    try {
      const wedding = await Wedding.find();
      res.json(wedding);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getWeddingById = async (req, res) => {
    try {
      const wedding = await Wedding.findById(req.params.id);
      res.json(wedding);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateWedding = async (req, res) => {
    Wedding.findByIdAndUpdate(req.params.id)
      .then((existingWedding) => {
        existingWedding.hotelName = req.body.hotelName;
        existingWedding.hallName = req.body.hallName;
        existingWedding.description = req.body.description;
        existingWedding.capacity = req.body.capacity;
        existingWedding.length = req.body.length;
        existingWedding.width = req.body.width;
        existingWedding.price = req.body.price;
        
        existingWedding
          .save()
          .then(() => res.json('Wedding Hall Details updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const deleteWedding = async (req, res) => {
    Wedding.findByIdAndDelete(req.params.id)
      .then((deletedWedding) => {
        res.json('Wedding Hall Details deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  
  module.exports = {
    addWedding,
    getWeddings,
    getWeddingById,
    updateWedding,
    deleteWedding
  
   
  }
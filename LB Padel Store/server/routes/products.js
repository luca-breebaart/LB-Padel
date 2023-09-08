const express = require('express');
const ProductsSchema = require('../models/products'); // Update the import

const router = express();

// Read all products
router.get('/api/Allproducts', async (req, res) => {
  try {
    const findProducts = await ProductsSchema.find();
    res.json(findProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Read single song
router.get('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const song = await ProductsSchema.findById(id); 
    if (!song) {
      return res.status(404).json({ message: 'Song not found' });
    }
    res.json(song);
  } catch (error) {
    res.status(500).json(error);
  }
});


// Create a new song
router.post('/api/products', async (req, res) => {
  try {
    const song = new ProductsSchema({ ...req.body }); // Update the variable name
    const savedSong = await song.save();
    res.json(savedSong);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a song
router.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ProductsSchema.findByIdAndUpdate(id, req.body);
    res.json({ message: 'Song updated successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete a song
router.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ProductsSchema.findByIdAndDelete(id);
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

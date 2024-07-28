const express = require('express');
const Volunteer = require('../models/volunt'); // Adjust the path as needed

const router = express.Router();

// Create a new volunteer
router.post('/volunteers', async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).send(volunteer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all volunteers
router.get('/volunteers', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).send(volunteers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a volunteer by ID
router.get('/volunteers/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).send();
    }
    res.status(200).send(volunteer);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a volunteer by ID
router.patch('/volunteers/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'phone', 'recruitment_status', 'username', 'password']; // Add other updatable fields as needed
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).send();
    }

    updates.forEach((update) => (volunteer[update] = req.body[update]));
    await volunteer.save();
    res.status(200).send(volunteer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a volunteer by ID
router.delete('/volunteers/:id', async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).send();
    }
    res.status(200).send(volunteer);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.post('/volunteers', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

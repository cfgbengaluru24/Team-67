const express = require('express');
const router = express.Router();
const Volunteer = require('../models/volunt'); // Corrected model import
const Student = require('../models/student');
const StudentVolunteerMapping = require('../models/volunteerStudentMapping');

// Create mappings based on subject
router.post('/map-by-subject', async (req, res) => {
  const { subject } = req.body;

  try {
    const volunteers = await Volunteer.find({ subject: subject });
    const students = await Student.find({ subject: subject });

    if (volunteers.length === 0 || students.length === 0) {
      return res.status(404).send({ message: 'No volunteers or students found for this subject' });
    }

    const mappings = students.flatMap(student =>
      volunteers.map(volunteer => ({
        student: { _id: student._id, name: student.name },
        volunteer: { _id: volunteer._id, name: volunteer.name },
        subject: subject
      }))
    );

    const savedMappings = await StudentVolunteerMapping.insertMany(mappings);

    res.status(201).send(savedMappings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all mappings
router.get('/', async (req, res) => {
  try {
    const mappings = await StudentVolunteerMapping.find();
    res.status(200).send(mappings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get mappings for a specific volunteer
router.get('/volunteer/:name', async (req, res) => {
  try {
    const mappings = await StudentVolunteerMapping.find({ 'volunteer.name': req.params.name });
    if (mappings.length === 0) {
      return res.status(404).send({ message: 'No mappings found for this volunteer' });
    }
    res.status(200).send(mappings);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get mappings for a specific student
router.get('/student/:name', async (req, res) => {
  try {
    const mappings = await StudentVolunteerMapping.find({ 'student.name': req.params.name });
    if (mappings.length === 0) {
      return res.status(404).send({ message: 'No mappings found for this student' });
    }
    res.status(200).send(mappings);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

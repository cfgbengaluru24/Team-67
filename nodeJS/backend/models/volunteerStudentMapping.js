const mongoose = require('mongoose');

const VolunteerStudentMappingSchema = new mongoose.Schema({
  volunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  Date: { type: Date, default: Date.now }
});

const VolunteerStudentMapping = mongoose.model('VolunteerStudentMapping', VolunteerStudentMappingSchema);

module.exports = VolunteerStudentMapping;

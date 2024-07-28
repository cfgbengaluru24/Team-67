const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  test_link: { type: String, required: false },
  test_status: { type: String, required: false },
  verified_by: { type: Schema.Types.ObjectId, ref: 'User' },
  verification_status: { type: String, required: false },
  verification_date: { type: Date, default: Date.now }
});

const recruitmentFormSchema = new Schema({
  submission_date: { type: Date, default: Date.now },
  form_status: { type: String, required: false },
  verified_by: { type: Schema.Types.ObjectId, ref: 'User' },
  verification_status: { type: String, required: false },
  verification_date: { type: Date, default: Date.now },
  test: testSchema
});

const attendanceSchema = new Schema({
  date: { type: Date, default: Date.now },
  status: { type: String, required: false }
});

const scheduleSchema = new Schema({
  date: { type: Date, required: false },
  time: { type: String, required: false },
  activity: { type: String, required: false }
});

const dailyClassReportSchema = new Schema({
  date: { type: Date, default: Date.now },
  report: { type: String, required: false }
});

const notificationSchema = new Schema({
  message: { type: String, required: false },
  date: { type: Date, default: Date.now },
  read_status: { type: String, required: false }
});

const communityMessageSchema = new Schema({
  sender_id: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  receiver_id: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  message: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const assessmentSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: 'Student', required: false },
  assessment_date: { type: Date, default: Date.now },
  score: { type: Number, required: false },
  comments: { type: String }
});

const subjectSchema = new Schema({
  subject_name: { type: String, required: true }
});

const volunteerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  join_date: { type: Date, default: Date.now },
  ngo_id: { type: Schema.Types.ObjectId, ref: 'NGO', required: false },
  recruitment_status: { type: String, required: false },
  username: { type: String, required: false },
  password: { type: String, required: false },
  recruitment_form: recruitmentFormSchema,
  attendance: [attendanceSchema],
  schedule: [scheduleSchema],
  daily_class_report: [dailyClassReportSchema],
  notifications: [notificationSchema],
  community_messages: [communityMessageSchema],
  assigned_students: [{ student_id: { type: Schema.Types.ObjectId, ref: 'Student' }, assignment_date: { type: Date, default: Date.now } }],
  assessments: [assessmentSchema],
  // subjects_taught: [subjectSchema],
  subject:{type:String,required:true}
});

module.exports = mongoose.model('Volunteer', volunteerSchema);

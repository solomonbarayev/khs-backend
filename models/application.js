const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  applicantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  degreeLevel: {
    type: String,
    required: true,
    minlength: 2,
  },
  universitiesAppliedTo: {
    type: [String],
    minlength: 2,
  },
  universitiesAcceptedTo: {
    type: [String],
    minlength: 2,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model('application', applicationSchema);

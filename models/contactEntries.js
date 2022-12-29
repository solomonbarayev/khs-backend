const mongoose = require('mongoose');
const validator = require('validator');

const contactEntrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    validator: {
      validator: validator.isEmail,
      message: 'Invalid email',
    },
  },
  message: {
    type: String,
    required: true,
    minlength: 2,
  },
});

module.exports = mongoose.model('contactEntry', contactEntrySchema);

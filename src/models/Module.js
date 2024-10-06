const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  order: { type: Number, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);

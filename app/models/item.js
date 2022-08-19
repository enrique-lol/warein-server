const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  bayId: {
    type: String,
    required: false
  },
  targetClear: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: false
  },
  efficiency: {
    type: Number,
    required: false
  }
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
}, {
  timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)

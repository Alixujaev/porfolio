const {Schema, model} = require('mongoose')

const workSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  responsive: {
    type: Boolean,
    required: true
  }
})

model('Works', workSchema)
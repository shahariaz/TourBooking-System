const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize:{
    type: Number,
    required: [true, 'A tour must have a maxGroupSize'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage:{
    type:Number,
    default:4.5
  },
  rationgQuantity:{
    type:Number,
    default:0
  },
  PriceDiscount:Number,
  summary:{
    type:String,
    trim:true,
    required: [true, 'A tour must have a summary'],
  },
  description:{
    type:String,
    trim:true
  },
  imageCover:{
    type:String,
    trim:true,
    required: [true, 'A tour must have an imageCover'],
  },
  images:[String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  StartDates:[Date]
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;

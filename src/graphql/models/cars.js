import {Schema, model } from 'mongoose';

const carSchema = new Schema({
  plates:{
    type: String,
    required: true
  },
  model:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  brand:{
    type: String,
    required: true
  },
  year:{
    type: String,
    required: true
  },
  color:{
    type: String,
    required: true
  },
  serial:{
    type: String,
    required: true
  }
});

export default model('cars', carSchema);
import { Schema, model } from 'mongoose';

const userSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name of the user is required.']
  },
  email: {
    type: String,
    required: [true, 'The email of the user is required.'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'The password of the user is required.']
  },
  image: {
    image: String,    
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE']
  },
  status: {
    type: Boolean,
    default: true
  },
  google: {
    type: Boolean,
    default: false
  }
});

export default model('User', userSchema);
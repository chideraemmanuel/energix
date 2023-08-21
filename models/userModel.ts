import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
  },
});

const User = models.user || model('user', userSchema);

export default User;

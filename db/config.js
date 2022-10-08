import mongoose from 'mongoose';
import colors from 'colors';

export const dbConnection = async() => {

  try {

    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB'.green);
  }
  catch (e) {
    throw new Error(`Error connection to MongoDB: ${e}`.red)
  }
}
import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

export {};

if (!process.env.MONGODB_URI) {
  throw new Error('ERROR OF FINDING MONGODB_URI')
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  try {
    if (cached.conn) {
      console.log('Using cached connection');
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
        serverSelectionTimeoutMS: 5000,
      };

      console.log('Connecting to MongoDB...', MONGODB_URI);
      cached.promise = mongoose.connect(MONGODB_URI, opts);
    }

    cached.conn = await cached.promise;
    console.log('Successfully connected to MongoDB:', 
      mongoose.connection?.db?.databaseName || 'unknown database'
    );
    return cached.conn;
  } catch (error: unknown) {
    // Type guard to ensure error is an Error object with optional code property
    if (error instanceof Error) {
      console.error('MongoDB connection error:', {
        message: error.message,
        code: (error as { code?: string }).code,
        database: MONGODB_URI
      });
    } else {
      console.error('Unknown MongoDB connection error:', error);
    }
    throw error;
  }
}

export default connectDB; 
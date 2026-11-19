import mongoose from 'mongoose';

function sanitizeEnv(value?: string): string {
  if (!value) return '';
  return value.trim().replace(/^["']+|["']+$/g, '').trim();
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || {
  conn: null,
  promise: null,
};

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  const MONGODB_URI = sanitizeEnv(process.env.MONGODB_URI).replace(/^MONGODB_URI=/i, '');
  const DB_NAME = sanitizeEnv(process.env.DB_NAME);

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  if (!DB_NAME) {
    throw new Error('Please define the DB_NAME environment variable');
  }

  if (cached.conn) {
    if (mongoose.connection.readyState === 1) {
      return cached.conn;
    }
    if (mongoose.connection.readyState !== 2) {
      cached.conn = null;
      cached.promise = null;
    }
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: true,
      dbName: DB_NAME,
      maxPoolSize: 10, // Maximum number of connections in the pool
      minPoolSize: 2,  // Minimum number of connections to maintain
      serverSelectionTimeoutMS: 5000, // Timeout for server selection
      socketTimeoutMS: 45000, // Timeout for socket operations
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
  }

  try {
    cached.conn = await cached.promise;
    console.log('MongoDB connected successfully');
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error('MongoDB connection error:', error);
    throw error;
  }
}

export default connectDB;

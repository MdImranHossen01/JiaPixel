// scripts/fix-database.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fixDatabaseData() {
  console.log('Starting one-time script to fix database records...');
  try {
    const now = new Date();

    // This raw MongoDB command finds all documents missing the 'updatedAt' field
    // and sets a default date for them.
    const result = await prisma.$runCommandRaw({
      update: 'Service', // This must match the collection name in your database
      updates: [
        {
          q: { updatedAt: { $exists: false } },
          u: { $set: { updatedAt: now, createdAt: now } },
          multi: true,
        },
      ],
    });

    console.log('Database fix complete!');
    console.log('Result:', result);

  } catch (e) {
    console.error('An error occurred while fixing the database:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

fixDatabaseData();
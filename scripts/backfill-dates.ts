// scripts/backfill-dates.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function backfillDates() {
  console.log('Starting backfill process for missing dates...');
  try {
    const now = new Date();

    // This command directly tells MongoDB to find all "Service" documents
    // where the 'updatedAt' field does not exist and sets both 'updatedAt'
    // and 'createdAt' to the current time.
    const result = await prisma.$runCommandRaw({
      update: 'Service', // Note: This is case-sensitive and must match your collection name
      updates: [
        {
          q: { updatedAt: { $exists: false } },
          u: { $set: { updatedAt: now, createdAt: now } },
          multi: true, // Update multiple documents
        },
      ],
    });

    console.log('Backfill complete!');
    console.log('Database response:', result);
    
  } catch (e) {
    console.error('An error occurred during the backfill process:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

backfillDates();
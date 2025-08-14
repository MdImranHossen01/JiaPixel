import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main(): Promise<void> {
  try {
    console.log('Checking and updating service slugs...');
    
    // 1. Fetch ALL services to ensure every slug is correct.
    const allServices = await prisma.service.findMany();
    
    console.log(`Found ${allServices.length} total services to check.`);
    
    for (const service of allServices) {
      // 2. Generate the ideal slug from the title.
      const idealSlug = service.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')     // Remove special characters
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')         // Replace multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, '');   // Remove leading/trailing hyphens

      // 3. Only update if the current slug is missing or incorrect.
      if (service.slug !== idealSlug) {
        let finalSlug = idealSlug;

        // 4. Check if the ideal slug is already taken by ANOTHER service.
        const existingService = await prisma.service.findFirst({
          where: {
            slug: finalSlug,
            NOT: {
              id: service.id, // Exclude the current service from the check
            },
          },
        });
        
        // If the slug is taken, find a unique alternative.
        if (existingService) {
          let counter = 1;
          let newSlug = `${finalSlug}-${counter}`;
          
          while (await prisma.service.findFirst({ where: { slug: newSlug } })) {
            counter++;
            newSlug = `${finalSlug}-${counter}`;
          }
          finalSlug = newSlug;
        }
        
        // 5. Update the service with the correct, unique slug.
        await prisma.service.update({
          where: { id: service.id },
          data: { slug: finalSlug }
        });
        
        console.log(`Updated service "${service.title}" with new slug "${finalSlug}"`);
      }
    }
    
    console.log('Slug check and update process complete.');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
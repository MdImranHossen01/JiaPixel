import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Updating services with slugs...');
    
    // Get all services that don't have a slug
    const servicesWithoutSlug = await prisma.service.findMany({
      where: {
        slug: null,
      },
    });
    
    console.log(`Found ${servicesWithoutSlug.length} services without slugs`);
    
    for (const service of servicesWithoutSlug) {
      // Generate slug from title
      let slug = service.title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .trim(); // Remove leading/trailing hyphens
      
      // Check if slug already exists
      const existingService = await prisma.service.findFirst({
        where: { slug }
      });
      
      if (existingService) {
        // If slug exists, append a number
        let counter = 1;
        let newSlug = `${slug}-${counter}`;
        
        while (await prisma.service.findFirst({ where: { slug: newSlug } })) {
          counter++;
          newSlug = `${slug}-${counter}`;
        }
        
        slug = newSlug;
      }
      
      // Update the service with the new slug
      await prisma.service.update({
        where: { id: service.id },
        data: { slug }
      });
      
      console.log(`Updated service "${service.title}" with slug "${slug}"`);
    }
    
    console.log('All services have been updated with slugs.');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
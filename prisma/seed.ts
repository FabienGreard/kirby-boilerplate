/* eslint-disable no-console */
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: 'Kirby Doe',
  },
];

async function main() {
  console.log(`Start seeding ...`);

  // reset db
  await prisma.user.deleteMany();

  await Promise.all(
    users.map(async user => {
      const createdUser = await prisma.user.create({
        data: user,
      });

      console.log(createdUser);
    }),
  );

  console.log(`Seeding finished.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

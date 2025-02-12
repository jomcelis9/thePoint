import { PrismaClient } from '@prisma/client';
import faker from 'faker';

const prisma = new PrismaClient();

const data = Array.from({ length: 100 }, () => ({
  user_full_name: faker.name.findName(),
  user_password: faker.internet.password(),
  username: faker.internet.email(),
}));

async function main() {
  for (const user of data) {
    await prisma.users.create({
      data: user,
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
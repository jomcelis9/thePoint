import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
// { log: ["query"] }
const userData = {
  user_full_name: faker.person.firstName(),
  user_password: faker.internet.password(),
  username: faker.internet.username(),
};

const multipleUserData = Array.from({ length: 10 }, () => ({
  user_full_name: faker.person.firstName(),
  user_password: faker.internet.password(),
  username: faker.internet.username(),
}));

const multipleUserContact = Array.from({ length: 10 }, () => ({
  user_email: faker.internet.email(),
  user_contact_number: faker.string.numeric(11), // Limiting to 10 digits
}));

const staff = Array.from({ length: 10 }, () =>({
  staff_name: faker.person.firstName(),
  staff_birthdate: faker.date.birthdate(),
}));


const appointments = Array.from({ length: 10 }, () => ({
  preferred_time: faker.date.soon(),
  preferred_date: faker.date.soon(),
}));

async function main() {

  // deleteAllRecords('users');
  // deleteAllRecords('user_contacts')
  // resetIncrement();

  // Adds data to users Table
  // createMultipleRecords('users', multipleUserData);
  // createMultipleContacts();

  // createMultipleRecords('clinic_staff', staff);

  createMultipleAppointments();
}

async function resetIncrement(){
  await prisma.$executeRaw`ALTER SEQUENCE "users_user_id_seq" RESTART WITH 1`;
  console.log('Increment Reset')
}

async function deleteAllRecords(table){
  await prisma[table].deleteMany({});

}

async function createMultipleRecords(table, data){
  for( const row of data ){
    await prisma[table].create({
      data: row,
    });
  }
}


function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

async function createMultipleContacts() {
  const users = await prisma.users.findMany(); // Get existing users

  if (users.length === 0) {
    console.log("No users found. Skipping contact creation.");
    return;
  }

  // Shuffle users array to randomize assignment
  const shuffledUsers = shuffleArray(users).slice(0, multipleUserContact.length);

  for (let i = 0; i < shuffledUsers.length; i++) {
    await prisma.user_contacts.create({
      data: {
        user_email: multipleUserContact[i].user_email,
        user_contact_number: multipleUserContact[i].user_contact_number,
        users: {
          connect: { user_id: shuffledUsers[i].user_id }
        }
      },
    });
  }
}

async function createMultipleAppointments(){
  // Get existing users
  const users = await prisma.users.findMany();

  const shuffledUsers = shuffleArray(users).slice(0, users.length);

  for (let i = 0; i < shuffledUsers.length; i++){
    await prisma.appointments.create({
      data: {
        preferred_time: appointments[i].preferred_time,
        preferred_date: appointments[i].preferred_date,
        users: {
          connect: {user_id: shuffledUsers[i].user_id}
        }
      },
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
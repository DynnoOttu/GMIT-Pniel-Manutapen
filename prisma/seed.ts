const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const password = bcrypt.hashSync("admin123", 10);

  const users = [
    {
      name: "Super Admin",
      email: "admin@gmitpniel.com",
      password,
      role: "ADMIN",
      isActive: true,
    },
    {
      name: "Admin Multimedia",
      email: "multimedia@gmitpniel.com",
      password,
      role: "ADMIN",
      isActive: true,
    },
    {
      name: "Admin Pelayanan",
      email: "pelayanan@gmitpniel.com",
      password,
      role: "ADMIN",
      isActive: true,
    },
  ];

  for (const user of users) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (!existingUser) {
      const createdUser = await prisma.user.create({
        data: user,
      });

      console.log(`User created: ${createdUser.email}`);
    } else {
      console.log(`User already exists: ${existingUser.email}`);
    }
  }

  console.log("Seed user completed");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });

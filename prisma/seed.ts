import { prisma } from '../lib/prisma'

const main = async () => {
  await prisma.user.upsert({
    where: { email: 'seed@prisma.io' },
    update: {},
    create: {
      name: 'bob',
      email: 'seed@prisma.io',
      tasks: {
        create: [
          {
            title: 'sample task',
          },
        ],
      },
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

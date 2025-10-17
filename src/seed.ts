import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.game.deleteMany(); // reset for dev
  await prisma.game.createMany({
    data: [
      {
        title: 'Nebula Runner',
        slug: 'nebula-runner',
        description: 'Fast-paced space runner with roguelike upgrades.',
        priceCents: 1299,
        coverUrl: 'https://picsum.photos/seed/nebula/800/450'
      },
      {
        title: 'Pixel Farm',
        slug: 'pixel-farm',
        description: 'Chill farming sim with cozy pixel art.',
        priceCents: 999,
        coverUrl: 'https://picsum.photos/seed/farm/800/450'
      },
    ]
  });
  console.log('Seeded games ✅');
}

main().finally(() => prisma.$disconnect());
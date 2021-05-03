import prisma from 'prisma/index';

export default {
  Query: {
    viewer() {
      return prisma.user.findFirst();
    },
  },
};

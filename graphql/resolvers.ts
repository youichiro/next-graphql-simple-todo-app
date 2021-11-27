export const resolvers = {
  Query: {
    tasks: (_parent, _args, ctx) => {
      return ctx.prisma.task.findMany()
    },
  },
}

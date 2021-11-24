export const resolvers = {
  Query: {
    tasks: () => {
      return [
        {
          id: 1,
          title: 'sample task 1',
          done: true,
        },
        {
          id: 2,
          title: 'sample task 2',
          done: true,
        },
        {
          id: 3,
          title: 'sample task 3',
          done: false,
        },
      ]
    }
  }
}

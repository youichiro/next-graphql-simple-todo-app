import { objectType } from 'nexus'

export const Task = objectType({
  name: 'Task',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.string('title')
    t.nonNull.boolean('done')
  }
})

import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Task {
    id: Int
    title: String
    done: Boolean
  }

  type Query {
    tasks: [Task]
  }
`

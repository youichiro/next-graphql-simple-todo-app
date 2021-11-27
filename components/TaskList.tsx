import { gql, useQuery } from '@apollo/client'
import { Task } from '.prisma/client'
import { Checkbox, List, ListItem, Flex } from '@chakra-ui/react'
import TaskDeleteButton from './TaskDeleteButton'

export const AllTasksQuery = gql`
  query {
    tasks {
      id
      title
      done
    }
  }
`

const TaskList: React.FC = () => {
  const { data, loading, error } = useQuery(AllTasksQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <List>
      {data.tasks.map((task: Task) => (
        <ListItem key={task.id}>
          <Flex justify='space-between'>
          <Checkbox colorScheme='teal' isChecked={task.done}>
            {task.title}
          </Checkbox>
          <TaskDeleteButton taskId={task.id} />
          </Flex>
        </ListItem>
      ))}
    </List>
  )
}

export default TaskList

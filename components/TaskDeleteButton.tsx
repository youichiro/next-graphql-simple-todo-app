import { Box, IconButton } from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import { gql, useMutation } from '@apollo/client'
import { AllTasksQuery } from './TaskList'

const DeleteTaskMutation = gql`
  mutation DeleteTask($id: Int!) {
    deleteTask(id: $id) {
      id
    }
  }
`

const TaskDeleteButton: React.FC<{ taskId: number }> = ({ taskId }) => {
  const [deleteTask, { error }] = useMutation(DeleteTaskMutation, {
    refetchQueries: [AllTasksQuery],
  })

  const handleClick = () => {
    deleteTask({
      variables: {
        id: taskId,
      },
    })
  }

  if (error) return <p>Error: {error.message}</p>

  return (
    <Box>
      <IconButton
        aria-label='tasl delete button'
        icon={<SmallCloseIcon />}
        variant='ghost'
        color='gray.200'
        _hover={{ bg: 'none', color: 'gray' }}
        _focus={{ boxShadow: 'none' }}
        onClick={() => handleClick()}
      />
    </Box>
  )
}

export default TaskDeleteButton

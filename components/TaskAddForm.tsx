import { Stack, FormControl, Input, Button } from '@chakra-ui/react'


  const TaskAddForm: React.FC = () => {
    return (
      <Stack direction='row'>
        <FormControl>
          <Input id='taskName' type='text' placeholder='Add task' />
        </FormControl>
        <Button colorScheme='teal' type='submit'>
          Submit
        </Button>
      </Stack>

    )
  }

export default TaskAddForm

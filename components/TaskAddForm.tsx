import { Formik, Field, Form } from 'formik'
import { Stack, FormControl, Input, Button } from '@chakra-ui/react'
import { gql, useMutation } from '@apollo/client'
import { AllTasksQuery } from './TaskList'

const CreateTaskMutaiton = gql`
  mutation CreateTask($title: String!) {
    createTask(title: $title) {
      id
      title
      done
    }
  }
`

const TaskAddForm: React.FC = () => {
  const [createTask, { error }] = useMutation(CreateTaskMutaiton, {
    refetchQueries: [AllTasksQuery],
  })

  const handleSubmit = (title: string, resetForm: () => void) => {
    if (!title) return
    createTask({
      variables: {
        title: title,
      },
    })
    resetForm()
  }

  if (error) return <p>Error: {error.message}</p>

  return (
    <Formik
      initialValues={{ title: '' }}
      onSubmit={(value, actions) => handleSubmit(value.title, actions.resetForm)}
    >
      <Form>
        <Stack direction='row'>
          <Field name='title'>
            {({ field }) => (
              <FormControl>
                <Input {...field} id='title' type='text' placeholder='Add task' />
              </FormControl>
            )}
          </Field>
          <Button colorScheme='teal' type='submit'>
            Submit
          </Button>
        </Stack>
      </Form>
    </Formik>
  )
}

export default TaskAddForm

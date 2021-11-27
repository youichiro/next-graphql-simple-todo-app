import { Formik, Field, Form } from 'formik';
import { Stack, FormControl, Input, Button } from '@chakra-ui/react'


const TaskAddForm: React.FC = () => {
  const handleSubmit = (taskName: string, resetForm: () => void) => {
    if (!taskName) return
    alert(taskName)
    resetForm()
  }

  return (
    <Formik
      initialValues={{ taskName: '' }}
      onSubmit={(value, actions) => handleSubmit(value.taskName, actions.resetForm)}
    >
      <Form>
        <Stack direction='row'>
          <Field name='taskName'>
            {({ field }) => (
              <FormControl>
                <Input {...field} id='taskName' type='text' placeholder='Add task' />
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

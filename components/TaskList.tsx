import { gql, useQuery } from '@apollo/client'
import { Task } from '.prisma/client'

const AllTasksQuery = gql`
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
     <div>
       <h1>TASK LIST</h1>
       <ul>
         {data.tasks.map((task: Task) => (
           <li key={task.id}>
             <p>{task.title}</p>
           </li>
         ))}
       </ul>
     </div>
  )
}

export default TaskList

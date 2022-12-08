// Components
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'

function Project({ project }) {
  return (      
    <section className='project-container'>
        <p>{project.title}</p>
          <TaskForm /> 
          {project.tasks.map((task, index) => { 
              return <Task task={task} key={ index } />
          }) }          
    </section>
  )
}

export default Project  
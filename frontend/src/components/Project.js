// Components
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'

function Project({ project }) {



    
  return (      
    <section className='project-container'>
        <p>{project.title}</p>
          {/* <TaskForm /> */}
          {/* {console.log(project)} */}
          
          
          {/* {project.tasks.map((task, index) => { 
              return <Task key={index} task={ task } />
          })} */}
    </section>
  )
}

export default Project  
// Redux
import { deleteProject } from '../features/projects/projectSlice'
// Icons
import {AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
// Notifications
import { toast } from 'react-toastify'
// Components
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'

function Project({ project }) {
  
  const dispatch = useDispatch() 

// Methods
  const handleDeleteProject = () => {
    // Pass ID of project --> slice --> backend      
    dispatch(deleteProject(project._id))    
    toast.success("Project delete successful")        
  }

  return (
    <section className='project-container'>
      <div className='project-card-heading'>
        <h2>{project.title}</h2>
        <button><AiFillCloseCircle onClick={handleDeleteProject} size={25} className='project-card-icon'/></button>
      </div>
      <TaskForm id={ project._id } />      
        {project.tasks.map((task, index) => {
          return <Task key={index} oldTask={task}  />
      })}
    </section>
  )
}

export default Project
// Components
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'
// Icons
import {AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteProject } from '../features/projects/projectSlice'

function Project({ project }) {
    const dispatch = useDispatch()

    const handleDeleteProject = () => {
        // Pass ID of project --> slice --> backend        
        dispatch(deleteProject(project._id))
    }

  return (
    <section className='project-container'>
      <div className='project-card-header'>
        <h2>{project.title}</h2>
        <button onClick={handleDeleteProject}><AiFillCloseCircle size={25} /></button>
      </div>
      <TaskForm id={ project._id } />
      <ul>
      {project.tasks.map((task, index) => { 
          return <Task key={index} task={task} id={ project._id } />
      })}
        </ul>
    </section>
  )
}

export default Project
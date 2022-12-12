// Components
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'
// Icons
import {AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteProject } from '../features/projects/projectSlice'


import { toast } from 'react-toastify'

function Project({ project }) {
    const dispatch = useDispatch()

    const handleDeleteProject = () => {
        // Pass ID of project --> slice --> backend      
      dispatch(deleteProject(project._id))
      
      toast.success("Project delete successful")
    }

  return (
    <section className='project-container'>
      <div className='project-card-heading'>
        <h2>{project.title}</h2>
        <button><AiFillCloseCircle onClick={handleDeleteProject} size={25} /></button>
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
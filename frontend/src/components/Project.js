// React
import { useLocation , useNavigate, useParams} from 'react-router-dom'
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
import { useEffect, useState} from 'react'

function Project({ project }) {
  
  const dispatch = useDispatch()
  // const location = useLocation()
  // let { project } = location.state

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
      <ul>
        {project.tasks.map((task, index) => {
          return <Task key={index} oldTask={task}  />
      })}
        </ul>
    </section>
  )
}

export default Project
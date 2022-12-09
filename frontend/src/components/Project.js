// Components
import Task from '../components/Task'
import TaskForm from '../components/TaskForm'

// Icons
import {AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject } from '../features/projects/projectSlice'




function Project({ project }) {
    const dispatch = useDispatch()

    

    const handleDeleteProject = () => {
        // Pass ID of project --> slice --> backend        
        dispatch(deleteProject(project._id))
    }

  return (
      <section className='project-container'>        
          <h2>{project.title}</h2>
          <button onClick={handleDeleteProject}><AiFillDelete/></button>
        <TaskForm />        
        {project.tasks.map((task, index) => { 
            return <Task key={index} task={ task } />
        })}
    </section>
  )
}

export default Project
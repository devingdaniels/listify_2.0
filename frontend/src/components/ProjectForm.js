// React
import { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
import { createProject }  from '../features/projects/projectSlice'

function ProjectForm() {
    // Hooks
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
  
    const handleSubmit = (e) => { 
      e.preventDefault()
      dispatch(createProject({ title }))      
      setTitle('')      
    }

    return (      
        <form onSubmit={handleSubmit} className='project-form-container'>
            <input
              type="text"
              name='title'
              value={title}
              id='title'
              placeholder='New Project'
              onChange={(e) => setTitle(e.target.value)}
              required
            />
        <button type='submit'>New Project</button>
      </form>
  )
}

export default ProjectForm
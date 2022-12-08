import { useState }  from 'react'

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
      <section>
        <form onSubmit={handleSubmit}>            
            <input
                type="text"
                name='title'
                value={title}
                id='title'
                placeholder='New Project'
                required
                onChange={(e) => setTitle(e.target.value)}
                />
                <button type='submit'>Add Project</button>
        </form>
    </section>
  )
}

export default ProjectForm
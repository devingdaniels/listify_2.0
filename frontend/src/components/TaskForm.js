// React
import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { addTaskToProject } from '../features/projects/projectSlice'

// Components
import { MdAddCircleOutline } from 'react-icons/md'


function TaskForm({ id }) { 
    const dispatch = useDispatch()

    const [task, setTask] = useState('')    

    const onSubmit = (e) => { 
        // Prevent page reload
        e.preventDefault()
        // Pass ID of project and title of task
        const data = {
            id: id,
            taskData: task,            
        }
        // Create payload        
        dispatch(addTaskToProject(data))
        // Reset state
        setTask('')        
    }
    
  return (
      <form onSubmit={onSubmit} className='task-form'>
          <input
              type="text"
              placeholder='My New Task'
              value={task}
              onChange={ (e)=> setTask(e.target.value) }            
          />
          <button type='submit'><MdAddCircleOutline size={ 20 } /></button> 
    </form>
  )
}

export default TaskForm
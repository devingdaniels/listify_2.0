// React
import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { addTaskToProject } from '../features/projects/projectSlice'


function TaskForm({ id }) {

    const dispatch = useDispatch()
    const [task, setTask] = useState('')
    const [isEditable, setIsEditable] = useState(false)
    
    const toggleEditTask = () => {
    setIsEditable(isEditable => isEditable = !isEditable)
  }

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
    
    if (isEditable) {
        return (    
            <form onSubmit={onSubmit} className='task-form'>
                <input
                    type="text"
                    placeholder='Title'
                    value={task}
                    onChange={ (e)=>  setTask(e.target.value)}
                />
                <textarea
                    type="text"
                    placeholder='Description'
                />
                <button
                    type="radio"
                    placeholder='Title'  
                ></button>                
                <button type='button' className='task-section-button' onClick={() => toggleEditTask()}>Cancel</button>
                <button type='submit' className='task-section-button' >Add</button>                     
            </form>
        )
    }
    else { 
        return (                                    
            <button type='button' className='task-section-button' onClick={() => toggleEditTask()}>Add Task</button>
        )
    }
}

export default TaskForm


// 
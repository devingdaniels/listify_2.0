// React
import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { addTaskToProject } from '../features/projects/projectSlice'

// Icons
import { BsStar, BsStarFill } from 'react-icons/bs'


function TaskForm({ id }) {
// State    
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        isFavorite: false
    })
    const [isEditable, setIsEditable] = useState(false)
    

    const dispatch = useDispatch()

    // METHODS
    const resetState = () => {
        setTaskData({
            title: '',
            description: '',
            isFavorite: false
        })
    }
    
    const toggleEditTask = () => {
        setIsEditable(isEditable => isEditable = !isEditable)
        resetState()
    }

    const handleOnChange = (e) => {
        setTaskData((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }))
    }
    
    const toggleIsFav = () => {
        setTaskData({
            title: taskData.title,
            description: taskData.description,
            isFavorite: !taskData.isFavorite
        })        
    }

    const onSubmit = (e) => { 
        // Prevent page reload
        e.preventDefault()
        // Pass ID of project and title of task
        const data = {
            id: id,
            taskData: taskData,            
        }
        // Create payload        
        dispatch(addTaskToProject(data))
        // Reset state
        resetState()      
    }   

    if (isEditable) {
        return (    
            <form onSubmit={onSubmit} className='task-form'>
                <input
                    type="text"
                    name='title'
                    id='title'
                    placeholder='Title'
                    defaultValue={taskData.title}                    
                    onChange={handleOnChange}
                />
                <textarea
                    type="text"
                    name='description'
                    id='description'
                    placeholder='Description'
                    defaultValue={taskData.description}
                    onChange={ handleOnChange }
                />                
                { taskData.isFavorite ? (<><div className='isFavoriteTask'><p>Favorite: </p><BsStarFill onClick={toggleIsFav}/></div></>) : (<><div className='isFavoriteTask'><p>Favorite: </p><BsStar onClick={toggleIsFav}/></div></>)}
                <button type='button' className='task-section-button' onClick={() => toggleEditTask()}>Cancel</button>
                <button type='submit' className='task-section-button'>Add</button>                     
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
// React
import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { addTaskToProject } from '../features/projects/projectSlice'

// Icons
import { BsStar } from 'react-icons/bs'


function TaskForm({ id }) {
// State    
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        isFavorite: false
    })
    const [isEditable, setIsEditable] = useState(false)

    // METHODS
    const dispatch = useDispatch()
    const toggleEditTask = () => { setIsEditable(isEditable => isEditable = !isEditable)}
    const handleOnChange = (e) => {setTaskData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))}
    const toggleIsFav = () => {
        setTaskData({
            title: taskData.title,
            description: taskData.description,
            isFavorite: !taskData.isFavorite
        })
        console.log(taskData)
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
        console.log(taskData)
        // dispatch(addTaskToProject(data))
        // Reset state
        // setTaskData({
        //     title: '',
        //     description: '',
        //     favorite: false
        // })        
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
                <BsStar onClick={toggleIsFav} />               
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


// 
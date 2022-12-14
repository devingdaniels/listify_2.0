// React
import { useState } from 'react'
// Redux
import { updateProjectTask, deleteTask } from '../features/projects/projectSlice'
import { useDispatch } from 'react-redux'
// Icons
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai'
import { BsStar, BsStarFill } from 'react-icons/bs'
// Lodash
import lodash from 'lodash'
// Notifications
import { toast } from 'react-toastify'


function Task({ oldTask }) {
  const dispatch = useDispatch()
  
  const [newTask, setTaskData] = useState(oldTask)
  const [isEditable, setIsEditable] = useState(false)
  






  const toggleEditTask = () => {setIsEditable(isEditable => isEditable = !isEditable)}
  const handleOnChange = (e) => { setTaskData( prevState => ({...prevState, [e.target.name]: e.target.value}))}
  const toggleTaskForm = () => { setIsEditable(isEditable => isEditable = !isEditable) }
  const toggleIsFav = () => { setTaskData( prevState => ({ ...prevState, isFavorite: !newTask.isFavorite }))}








  const handleDeleteTask = () => {
    // Pass ID of project and the name of the task
    dispatch(deleteTask(newTask))
  }
  
  const handleUpdateTask = (e) => {
    // Prevent page reload
    e.preventDefault()
    // Pass data to reducer, which will make http PUT to backend - also need project ID for protected route
    // Don't make network request if data has not changed
    
    if ( lodash.isEqual (newTask, oldTask)) { 
      toast.warn('Tasks are identical')
      toggleEditTask()
      return 
    }

    if (newTask.title === '') { 
      toast.warn('Task requires a title')
      return 
    }

    const data = {      
      newTask,
      oldTask
    }
    // Make network request 
    dispatch(updateProjectTask(data))
    toggleEditTask()
}


  if (isEditable) {
    return (
      <form onSubmit={handleUpdateTask} className='task-form'>
                <input
                    type="text"
                    name='title'
                    id='title'
                    placeholder='Title'
                    defaultValue={newTask.title}                    
                    onChange={handleOnChange}
                />
                <textarea
                    type="text"
                    name='description'
                    id='description'
                    placeholder='Description'
                    defaultValue={newTask.description}
                    onChange={ handleOnChange }
                />                
                { newTask.isFavorite ? (<><div className='isFavoriteTask'><p>Favorite: </p><BsStarFill onClick={toggleIsFav}/></div></>) : (<><div className='isFavoriteTask'><p>Favorite: </p><BsStar onClick={toggleIsFav}/></div></>)}
                <button type='button' className='task-section-button' onClick={() => toggleTaskForm()}>Cancel</button>
                <button type='submit' className='task-section-button'>Add</button>                     
            </form>
    )
  }
  else { 
    return (
      <>
        <div onDoubleClick={toggleEditTask} className='update-task-container'>
          <div>
            <h3>{oldTask.title}</h3>
            <p>{oldTask.description}</p>
            <p>{oldTask.isFavorite ? (<><BsStarFill /></>) : (<><BsStar /></>)}</p>
          </div>
          <div>
            <AiOutlineEdit onClick={toggleEditTask} size={22} />
            <AiFillDelete onClick={handleDeleteTask} size={22} />
          </div>
          </div>
      </>
    )
  }
}

export default Task
// React
import { useEffect, useState } from 'react'
// Redux
import { updateProjectTask, deleteTask } from '../features/projects/projectSlice'
import { useDispatch } from 'react-redux'
// Icons
import { AiFillDelete } from 'react-icons/ai'
import { BsStar, BsStarFill } from 'react-icons/bs'
// Lodash
import lodash from 'lodash'
// Notifications
import { toast } from 'react-toastify'


function Task({ oldTask }) {
  // Hooks
  const dispatch = useDispatch()
  // State
  const [newTask, setTaskData] = useState(oldTask)
  const [isEditable, setIsEditable] = useState(false)
  // Methods
  const toggleEditTask = () => {setIsEditable(isEditable => isEditable = !isEditable)}
  const handleOnChange = (e) => { setTaskData( prevState => ({...prevState, [e.target.name]: e.target.value}))}
  const toggleTaskForm = () => { setIsEditable(isEditable => isEditable = !isEditable) }
  const toggleIsFav = () => { setTaskData( prevState => ({ ...prevState, isFavorite: !newTask.isFavorite }))}
  const handleDeleteTask = () => {dispatch(deleteTask(newTask))}
  
  const handleUpdateTask = (e) => {
    // Prevent page reload
    e.preventDefault()
    
    if (lodash.isEqual (newTask, oldTask)) { 
      toast.warn('No changes to save')
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

  const handleFavClick = () => {
    
    toggleIsFav()

  }


  useEffect(() => { 

  })

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
                { newTask.isFavorite ? (<><div className='isFavoriteTask'><span><BsStarFill onClick={toggleIsFav}/></span></div></>) : (<><div className='isFavoriteTask'><span><BsStar onClick={toggleIsFav}/></span></div></>)}
                <div className='task-form-button-container'>
                  <button type='button' className='task-section-button' onClick={() => toggleTaskForm()}>Cancel</button>
                  <button type='submit' className='task-section-button'>Add</button>
                </div>
            </form>
    )
  }
  else { 
    return (
      <>
        <div onDoubleClick={toggleEditTask} className='task-container'>
          <div className='task-container-task-data'>
            <h3>{oldTask.title}</h3>
            <p>{oldTask.description}</p>
          </div>          
          <div className='task-container-right-section' >
            <p >{oldTask.isFavorite ? (<><BsStarFill onClick={ handleFavClick} /></>) : (<><BsStar onClick={ handleFavClick}/></>)}</p>         
            <AiFillDelete className='project-card-icon' onClick={handleDeleteTask} size={22} />
            </div>
          </div>
      </>
    )
  }
}

export default Task
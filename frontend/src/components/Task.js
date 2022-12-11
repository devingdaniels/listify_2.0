// React
import { useState } from 'react'

// Icons
import {AiOutlineEdit, AiFillDelete } from 'react-icons/ai'
import { BsCheck2Circle } from 'react-icons/bs'


// Redux
import { updateProject } from '../features/projects/projectSlice'
import { useDispatch } from 'react-redux'

function Task({ task, id }) {
  const dispatch = useDispatch()

  const [isEditable, setIsEditable] = useState(false)
  const [taskTitle, setTaskTitle] = useState(task)

  const handleEditTask = () => {
    setIsEditable(isEditable => isEditable = !isEditable)
  }
  
  const handleDeleteTask = () => {
    console.log('delete task')
  }

  
  const handleUpdateTask = (e) => {
    // Prevent page reload
    e.preventDefault()
    // Pass data to reducer, which will make http PUT to backend - also need project ID for protected route
    const data = {
      id: id,
      taskData: taskTitle,      
    }

    dispatch(updateProject(data))    

    setIsEditable(isEditable => isEditable = !isEditable)
}


  if (isEditable) {
    return (
      <form onSubmit={handleUpdateTask}>
        <div className='update-task-container'>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}          
            />
          <button type='submit'><BsCheck2Circle /></button>
        </div>
      </form>
    )
  }
  else { 
    return (
      <>
        <div className='update-task-container' >
        <p>{taskTitle}</p>
          <AiOutlineEdit onClick={handleEditTask} size={22} />
          <AiFillDelete onClick={handleDeleteTask} size={22} />
          </div>
      </>
    )
  }


}

export default Task
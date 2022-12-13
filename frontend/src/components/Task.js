// React
import { useState } from 'react'
// Icons
import {AiOutlineEdit, AiFillDelete } from 'react-icons/ai'
// Redux
import { updateProjectTask, deleteTask } from '../features/projects/projectSlice'
import { useDispatch } from 'react-redux'

// Components 
import TaskForm from '../components/TaskForm'

function Task({ task, id }) {
  const dispatch = useDispatch()
  
  const [isEditable, setIsEditable] = useState(false)
  const [taskTitle, setTaskTitle] = useState(task)

  const toggleEditTask = () => {
    setIsEditable(isEditable => isEditable = !isEditable)
  }
  
  const handleDeleteTask = () => {
    // Pass ID of project and the name of the task
    const data = {
      id: id,      
      task: task
    }
    dispatch(deleteTask(data))
    setTaskTitle('')
  }

  
  const handleUpdateTask = (e) => {
    // Prevent page reload
    e.preventDefault()
    // Pass data to reducer, which will make http PUT to backend - also need project ID for protected route
    // Don't make network request if data has not changed
    if (taskTitle === task) { 
      toggleEditTask()
      return 
    }
    const data = {
      id: id,
      taskData: taskTitle,
      oldTask: task
    }
    // Make network request 
    dispatch(updateProjectTask(data))
    toggleEditTask()
}


  if (isEditable) {
    return (
      <form onSubmit={handleUpdateTask} className='task-form'>
        <div className='update-task-container'>
          <TaskForm/>
          <button type='submit'><AiOutlineEdit /></button>
        </div>
      </form>
    )
  }
  else { 
    return (
      <>
        <div className='update-task-container' >
        <p>{taskTitle}</p>
          <AiOutlineEdit onClick={toggleEditTask} size={22} />
          <AiFillDelete onClick={handleDeleteTask} size={22} />
          </div>
      </>
    )
  }


}

export default Task
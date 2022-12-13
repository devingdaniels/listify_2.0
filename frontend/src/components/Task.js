// React
import { useState } from 'react'
// Redux
import { updateProjectTask, deleteTask } from '../features/projects/projectSlice'
import { useDispatch } from 'react-redux'
// Icons
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai'
import { BsStar, BsStarFill } from 'react-icons/bs'
// Components 
import TaskForm from '../components/TaskForm'


function Task({ task, id }) {
  const dispatch = useDispatch()
  
  const [isEditable, setIsEditable] = useState(false)
  const [taskTitle, setTaskTitle] = useState(task.title)

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
      <TaskForm  />
    )
  }
  else { 
    return (
      <>
        <div className='update-task-container'>
          <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{task.isFavorite ? (<><BsStarFill /></>) : (<><BsStar /></>)}</p>
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
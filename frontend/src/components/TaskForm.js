// React
import { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { updateProject } from '../features/projects/projectSlice'



// Components
import { MdAddCircleOutline } from 'react-icons/md'


function TaskForm({ id }) { 
    const dispatch = useDispatch()

    const [task, setTask] = useState('')    

    const onSubmit = (e) => { 
        e.preventDefault()


        const data = {
            title: task,
            id: id
        }
        dispatch(updateProject(data))



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
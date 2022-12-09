import { useState } from 'react'


// Components
import { MdAddCircleOutline } from 'react-icons/md'


function TaskForm() {

    const [title, setTitle] = useState('')



    const onClick = (e) => { 
        e.preventDefault()

        setTitle('')
        console.log(title)
    }
    
  return (
      <form onClick={onClick} className='new-task-form'>
          <input
              type="text"
              placeholder='My New Task'
              value={title}
              onChange={ (e)=> setTitle(e.target.value) }            
          />
          <button type='submit'><MdAddCircleOutline size={ 40 } /></button> 
    </form>
  )
}

export default TaskForm
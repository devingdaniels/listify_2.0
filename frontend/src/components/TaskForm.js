import { useState } from 'react'


// Components
import { GrFormAdd } from 'react-icons/gr'

function TaskForm() {

    const [title, setTitle] = useState('')



    const onClick = (e) => { 
        e.preventDefault()


        console.log(title)
    }
    
  return (
      <form onClick={onClick }>
          <input
              type="text"
              placeholder='My New Task'
              value={title}
              onChange={ (e)=> setTitle(e.target.value) }            
          />
          <button type='submit'><GrFormAdd /></button> 
    </form>
  )
}

export default TaskForm
import {AiOutlineEdit, AiFillDelete } from 'react-icons/ai'

function Task({ task }) {
  return (
    <li>
      {task}
      <div>
        <AiOutlineEdit size={22}/>
        <AiFillDelete size={22} />
      </div>
    </li>
  )
}

export default Task
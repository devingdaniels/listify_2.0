import React from 'react'
import { Link } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <main>
        <nav>
            <Link to='/'>Inbox</Link>
            <Link to='today'>Today</Link>
            <Link to='week'>Week</Link>
            <Link to='completed'>Completed</Link>
          </nav>
          
          <Routes>
              <Route path='/' element={<h1>hello from inbox</h1>}></Route>
              <Route path='/today' element={<h1>hello from today</h1>}></Route>
              <Route path='/week' element={ <h1>hello from week</h1> }></Route>
              <Route path='/completed' element={ <h1>hello from completed</h1> }></Route>              
          </Routes>

          
          

    </main>    
  )
}

export default Main

import React from 'react'
import { Link,  Routes, Route, Outlet } from 'react-router-dom'

function Main() {
  return (
    <main>
        <nav>
            <Link to='/'>Inbox</Link>
            <Link to='today'>Today</Link>
            <Link to='week'>Week</Link>
            <Link to='completed'>Completed</Link>
            <Link to='projects'>Projects</Link>
          </nav>
            <div className='task-grid-container'>
            <Routes>
                <Route path='/' element={<h1>hello from inbox</h1>}></Route>
                <Route path='/today' element={<h1>hello from today</h1>}></Route>
                <Route path='/week' element={ <h1>hello from week</h1> }></Route>
                <Route path='/completed' element={ <h1>hello from complete</h1> }></Route>
                <Route path='projects' element={ <><Link to='test1'>Load test1</Link><Outlet/> </> }>
                    <Route path='test1' element={<h1>hello from PROJECT TEST !</h1>}/>
                  </Route>
              </Routes>
        </div>
    </main>
  )
}

export default Main

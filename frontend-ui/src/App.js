import React, { useState } from 'react';
import './App.css';




function App() {
  
  const [text, setText] = useState('')

  const handleClick = async (e) => {
    
    e.preventDefault()

    try {
      const response = await fetch('/test', {
      method: 'POST',
      body: JSON.stringify({text: text}),
      headers: { 'Content-Type': 'application/json', }
      })
      setText('')
      if (response.status === 201) { 
        const data = await response.json()
        console.log(data)
      }            
    } catch (error) { 
      
    }
  } 

  return (
    <>
      <form onSubmit={handleClick} >
        <input type="text"
          onChange={(e) => setText(e.target.value)}
          value={ text}
        />
        <button type='submit'>Enter</button>
        </form>
    </>
  );
}

export default App;

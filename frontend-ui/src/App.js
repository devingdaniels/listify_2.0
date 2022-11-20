import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [quote, setQuote] = useState({})

  const handleClick = async () => {

    try {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json()

      const random = Math.floor(Math.random() * data.length)
      
      setQuote({
        text: data[random].text,
        author: data[random].author
      })

    } catch (error) { 
      console.log(error)
    }
  }

  return (
    <>
      <button onClick={handleClick}>Search</button>
      <i>"{quote.text}"</i>
      <cite>~{quote.author}</cite>
    </>
  );
}

export default App;
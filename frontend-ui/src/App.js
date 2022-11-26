// Styling 
import './App.css';
// App dependencies 
import React from 'react';
import { Routes, Route } from 'react-router-dom'


// Components
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LoginPage/>} />        
      </Routes>
      <Footer />
    </>
  );
}

export default App;



// function NewProject() {

//     const [title, setTitle] = useState('')

//     const handleClick = async(e) => { 
//         e.preventDefault()
//         try {
//             const response = await fetch('/api/add_project', {
//                 method: 'POST',
//                 body: JSON.stringify({ text: title }),
//                 headers: { 'Content-Type': 'application/json', }
//             })
//             if (response.status === 201) {
//                 const data = await response.json()
//                 console.log(data)
//             }
//         } catch (error) {             
//         }
// }

//   return (
//       <form onSubmit={handleClick}>
//           <label htmlFor="title"></label>
//           <input type="text" onChange={(e) => setTitle(e.target.value)} />
//           <button type='submit'>Add</button>
//     </form>
//   )
// }


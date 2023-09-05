import React from 'react'
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar';
import Courses from './pages/courses/Courses';

const App = () => {
  return (
    <> 
      <Navbar /> 
      <Home />
      <Courses />  
    </>
  )
}

export default App;
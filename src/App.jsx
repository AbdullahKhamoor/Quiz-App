import React from 'react'
import Quiz from './Components/Quiz Component/Quiz'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <>
   <Routes>
   <Route path = "//https://AbdullahKhamoor.github.io/Quiz-app" element = {<Quiz />} />
   </Routes>
    
   </>
  )
}

export default App
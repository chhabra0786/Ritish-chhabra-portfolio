import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './assets/components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App

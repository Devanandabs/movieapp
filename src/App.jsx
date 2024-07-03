import { useState } from 'react'

import './App.css'
import Navmovies from './components/Navmovies'
import Viewmovies from './components/Viewmovies'
import Addmovies from './components/Addmovies'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navmovies/>
    <Routes>
      
    <Route path='/' element={<Viewmovies/>}>
    </Route>
    <Route path='/add' element={<Addmovies/>}>
    </Route>
    </Routes>
    
    
    </>
  )
}

export default App

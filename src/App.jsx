import React, { Children } from 'react'
import Background from './pages/Background'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeroPage from './pages/HeroPage'

const App = () => {
  return (
    
      <BrowserRouter>
        <Background />
        <Routes>
          <Route path='/' element={<HeroPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
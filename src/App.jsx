
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import{ Contact } from './pages/Contact'
import { Label} from './pages/Label'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/label" element={<Label />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Navbar from './Navbar'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  const [entries, setEntries] = useState([])

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/category/' element={<CategorySelection />}/>
          <Route path='/entry/new/:category' element={<NewEntry entries={entries} setEntries={setEntries}/>}/>
          <Route path='*' element={<h4>Page not found!</h4>}/>
        </Routes>
        {/* <Home />
        <CategorySelection />
        <NewEntry /> */}
      </BrowserRouter>
    </>
  )
}

export default App
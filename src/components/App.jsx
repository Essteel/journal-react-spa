import React, { useState } from 'react'
import Navbar from './Navbar'
import CategorySelection from './CategorySelection'
import Home from './Home'
import NewEntry from './NewEntry'
import ShowEntry from './ShowEntry'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'

const seedEntries = [
  {category: 'Food', content: 'Pizza is awesome!'},
  {category: 'Coding', content: 'React is great!'},
  {category: 'Work', content: 'Just keep swimming!'}
]

const App = () => {
  const [entries, setEntries] = useState(seedEntries)
  const nav = useNavigate()

  // HOC Higher Order Component
  const ShowEntryWrapper = () => {
    const { id } = useParams()
    const entry = entries[id]
    return entry ? <ShowEntry entry={entry} /> : <h4>Entry not found!</h4>
  }

  const addEntry = (category, content) => {
    const id = entries.length
    // Add a new entry
    const newEntry = {
        category: category,
        content: content
    }
    setEntries([...entries, newEntry])
    nav(`/entry/${id}`)
  }

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home entries={entries}/>}/>
          <Route path='/category/' element={<CategorySelection />}/>
          <Route path='/entry/:id' element={<ShowEntryWrapper />}/>
          <Route path='/entry/new/:category' element={<NewEntry addEntry={addEntry}/>}/>
          <Route path='*' element={<h4>Page not found!</h4>}/>
        </Routes>
        {/* <Home />
        <CategorySelection />
        <NewEntry /> */}
    </>
  )
}

export default App
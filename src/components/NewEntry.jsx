import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewEntry = ({ setEntries,entries }) => {
  const { category } = useParams()
  const [entry, setEntry] = useState("")

  function submit(event) {
    event.preventDefault()
    // Add a new entry
    const newEntry = {
        category: category,
        content: entry
    }
    setEntries([...entries, newEntry])
  }

  return (
    <>
        <h2>New Entry in {category} category</h2>
        <form onSubmit={submit} className="container">
            <div>
            <textarea value={entry} onChange={(event) => setEntry(event.target.value)} rows="10" className="form-control"></textarea>
            </div>
            <button className="btn btn-dark mt-2">Create Entry</button>
        </form>
    </>
  )
}

export default NewEntry
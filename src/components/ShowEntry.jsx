import React from 'react'
import { useParams } from 'react-router-dom'

const ShowEntry = ({ entry }) => {
  return (
    <>
        <h5>{entry.content}</h5>
        <p>Posted in {entry.category.name}</p>
    </>
  )
}

export default ShowEntry

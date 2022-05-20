import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <h3>Product Details --- {id}</h3>
    </div>
  )
}

export default Detail

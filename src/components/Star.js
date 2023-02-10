import React from 'react'

const Star = ({ stars, reviews }) => {
    console.log(stars, reviews);
  return (
      <div>{stars} {reviews}</div>
  )
}

export default Star
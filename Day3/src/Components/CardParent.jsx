import React from 'react'


const CardParent = ({ title, content, imageUrl}) => {
  return (
    <div className='card'>
        <img src={imageUrl} alt={title} className="card-image" />
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default CardParent
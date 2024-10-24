import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='border-2 border-black  rounded-sm'>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    </>
  )
}

export default Card
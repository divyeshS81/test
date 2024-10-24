import React from 'react'

const Child = (props) => {

  return (
   <>
     <div>Child components</div>
    <p>Name : {props.name}</p>
    <p>Age: {props.age}</p>
   </>
  )
}

export default Child
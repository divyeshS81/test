import React from 'react'
import CardParent from './CardParent'

const CardChild = () => {
  return (
    <div>
        <CardParent 
            title="Card 1"
            content="This is  the content for the first card."
             imageUrl="https://via.placeholder.com/150"
        />
        <CardParent
        title="Card 2"
        content="This is the content for the second card."
        imageUrl="https://via.placeholder.com/150"
      />
      <CardParent
        title="Card 3"
        content="This is the content for the third card."
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
  )
}

export default CardChild
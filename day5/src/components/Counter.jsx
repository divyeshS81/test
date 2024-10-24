import React,{useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  // function incrementCount ()  {
  //   setCount(count + 1);
  // }

  // function decrementCount ()  {
  //   setCount(count - 1);
  // }

  return (
    <>
      <div className='border-2 border-gray-500'>
        <h1 className='font-bold text-3xl'>{count}</h1>
        <div className='flex gap-10'>
          <button className='border-2 border-black h-[50px] w-auto rounded-lg' onClick={() => {setCount(count + 1)}} style={{background: "green"}}>Increment</button>
          <button className='border-2 border-black h-[50px] w-auto rounded-lg' onClick={() => {setCount(count - 1)}} style={{background: "red"}}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default Counter
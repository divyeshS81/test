// import React,{useState} from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>the count is {count}</div>
//       <button onClick={() =>{setCount(count+1)}}>update count</button>
//       <button onClick={() => setCount(count-1)}>decrement count</button>
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react';

// const App = () => {
//   const [user, setUser] = useState({ name: 'John', age: 25 });

//   const updateName = () => {
//     setUser({ ...user, name: 'Jane'  }); 
//   };

//   return (
//     <div>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//       <button onClick={updateName}>Change Name</button>
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react';

// const App = () => {
//   const [fruits, setFruits] = useState(['Apple', 'Banana']);

//   const addFruit = () => {
//     setFruits([...fruits, 'Orange']); // Add a new fruit to the array
//   };

//   return (
//     <div>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//       <button onClick={addFruit}>Add Orange</button>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import Child from './Child'

const App = () => {
  const name = "Divyesh"
  const age = "28"
  return (
   <>
      <div className=''>
        <Child name={name} age={age} />
      </div>
   </>
  )
}

export default App
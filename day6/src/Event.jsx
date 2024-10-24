// import { useState } from 'react';

// function Event() {
//   const [inputValue, setInputValue] = useState('');

 
//   function handleChange(event) {
//     setInputValue(event.target.value); 
//   }

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={handleChange} 
//         placeholder="Type something..." 
//       />
//       <p>You typed: {inputValue}</p>
//     </div>
//   );
// }

// export default Event;

// import { useState } from 'react';

// function Event() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value, // Update the state dynamically based on input name
//     });
//   }

//   return (
//     <form>
//       <input 
//         type="text" 
//         name="firstName" 
//         value={formData.firstName} 
//         onChange={handleChange} 
//         placeholder="First Name" 
//       />
//       <input 
//         type="text" 
//         name="lastName" 
//         value={formData.lastName} 
//         onChange={handleChange} 
//         placeholder="Last Name" 
//       />
//       <p>First Name: {formData.firstName}</p>
//       <p>Last Name: {formData.lastName}</p>
//     </form>
//   );
// }

// export default Event;


import { useState } from 'react';

function HoverBox() {
  const [isHovered, setIsHovered] = useState(false);

  // Handlers for mouse enter and mouse leave
  function handleMouseEnter() {
    setIsHovered(true); // Set the state to true when mouse enters
  }

  function handleMouseLeave() {
    setIsHovered(false); // Set the state to false when mouse leaves
  }

  // Conditional styles based on hover state
  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: isHovered ? 'lightblue' : 'lightgray',
    textAlign: 'center',
    lineHeight: '200px',
    fontSize: '20px',
    cursor: 'pointer',
    border: '1px solid black',
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover me!
    </div>
  );
}

export default HoverBox;

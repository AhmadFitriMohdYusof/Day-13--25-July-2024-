// import React, { useState } from 'react'


// function App() {
//   const [press, setPress] = useState(2)
//   return (
//     <div>
//       <p>You clicked this button {press} times</p>
//       <button onClick={() => setPress(press + 1)}>click!</button>
//       </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';


function ToggleButton() {
  // Declare a state variable named 'isOn' and a function to update it named 'setIsOn'
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the state
  const toggle = () => {
    setIsOn(!isOn);
  };

  // useEffect hook to change the body's background color when isOn changes
  useEffect(() => {
    document.body.style.backgroundColor = isOn ? 'lightgreen' : 'lightcoral';

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [isOn]);
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle} style={{ padding: '10px', fontSize: '16px' }}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}

export default ToggleButton;

// import React, { useState } from 'react';
// function App() {
//   // Declare a state variable named 'name' and a function to update it named 'setName'
//   const [name, setName] = useState('');
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <input 
//         type="text" 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//         placeholder="Type your name"
//       />
//     </div>
//   );
// }
// export default App;

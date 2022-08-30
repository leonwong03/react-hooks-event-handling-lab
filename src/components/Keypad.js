import React from 'react'

// 1. In the `components/Keypad.js` file, create a `Keypad` React component.
function Keypad(){
    return (
        // 2. In that component, render an `input` with the right type.
        // 3. On that `input`, add an event handler that listens for the `change` event.
        // 4. When that event fires, use `console.log` to print out the text `'Entering password...'`.
        <input type="password" onChange={()=>console.log('Entering password...')}></input>
    )
};
export default Keypad
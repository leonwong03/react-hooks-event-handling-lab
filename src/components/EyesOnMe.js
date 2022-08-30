import React from 'react'

// 1. In the `components/EyesOnMe.js` file, create a `EyesOnMe` React component.
function EyesOnMe(){

    // 4. When the `focus` event fires, use `console.log` to print out the text `'Good!'`.
    function focus(){
        console.log('Good!')
    }

    // 5. When the `blur` event fires, use `console.log` to print out the text `'Hey! Eyes on me!'`.
    function blur(){
        console.log("Hey! Eyes on me!")
    }

    // 2. In that component, render a `button` with the text `'Eyes on me'`.
    // 3. On that `button`, add event handlers that listen for the `focus` and `blur` events.
    return (
        <button onFocus={focus} onBlur={blur}>'Eyes on me'</button>
    )
}

export default EyesOnMe








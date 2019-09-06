import React,{ useState } from 'react';

//export default ({ name }) => <h1>Hello {name}!</h1>;

const App = () => {
	
const [buttonText, setButtonText] = useState("Click me, please");
  function handleClick() {
    return setButtonText("Thanks, been clicked!");
  }
  return <button onClick={handleClick}>{buttonText}</button>;

}

export default App

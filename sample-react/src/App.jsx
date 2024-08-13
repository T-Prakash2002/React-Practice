import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 useEffect(() => {
	console.log("Component rendered successfully");
  }, []);
   return (
	<div>
  	<button onClick={() => setCount(count + 1)}>Click me</button>
    <Display count={count} />
	</div>
  );
}

function Display({count}){
    	return(
        <p>You clicked {count} times</p>
      )
}

export default App

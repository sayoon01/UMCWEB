import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(0);

  const onIncrease = ()=>{
   console.log('increase가 클릭됨');
   setCount(count+1);
  }

  const onDecrease = () => {
   setCount(count-1);
   console.log('decrease가 클릭됨');
 }
  return (
    <>
    <h2>{count}</h2>
       <div>
       <button onClick={onIncrease}>+1</button>
       <button onClick={onDecrease}>-1</button>
        </div>
    </>
  )
}

export default App

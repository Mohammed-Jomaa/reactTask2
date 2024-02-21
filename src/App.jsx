import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount] = useState(0);

  const changecount = ()=>{
    setCount(count+1);
  }

  return (
   <>
   <button onClick={changecount}>Mohammed Jomaa Count = {count}</button> 
   </>
   
  )
}

export default App

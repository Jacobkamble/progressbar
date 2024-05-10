import { useEffect, useState } from 'react'
import './App.css'
import Progressbar from './components/Progressbar'

function App() {


  const [value,setValue]=useState(0);

  const handlePercantage=()=>{

    const interval= setInterval(() => {
      if(value<100){
        setValue((value)=>value+1)
      }
      },100);

      return interval;
  }

  useEffect(()=>{
    const interval = handlePercantage();

    return ()=>clearInterval(interval)
  },[value])

 
  return (
    <>
    <Progressbar value={value} onComplete={(callback)=>{callback()}}/>
    </>
  )
}

export default App

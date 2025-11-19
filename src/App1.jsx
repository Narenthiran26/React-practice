import './App.css';
import { useState } from 'react';

function ClickCount(){
  let [count,setCount]=state(0);
  return count;
}

function ClickHandle(count){
  return(
    ClickCount(count+1)
  );
}

export default function App() {
  return (
    <div>
      <h2>Press</h2>
      <ClickHandle />
    </div>
  )
}



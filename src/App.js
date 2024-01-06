import "./App.css";
import { useState } from "react";

function App() {
  const[number,setNumber]=useState('')
  const numberClick = (value) => {
    if (number === '0' || number === '') {
      if (!number.endsWith('.')) {
        setNumber(value);
      }
    } else {if(number.length< 25)
      setNumber((prevNumber) => prevNumber + value);
    }
    
  };
  
  const calculateResult = () => {
    try {
      setNumber(eval(number).toString());
    } catch (error) {
      setNumber("Error");
    }
  };

  console.log(number)
 
  return (<div className="flex justify-center  h-[100vh] bg-rose-900 ">
    <div className="calculator border-4 w-[350px]  border-black rounded-lg shadow-slate-800 shadow-2xl text-white bg-zinc-900">
      <h1 className="text-3xl py-4 text-rose-600 font-semibold">CALCULATOR</h1>
      <p className=" mt-2 border border-rose-300 w-full h-9 px-2 text-xl pt-1">{number==''?0:number}</p>
      <div className="function-buttons w-full mt-2 mb-1 flex justify-around  text-2xl">
        <button className="bg-rose-700 hover:bg-rose-900 text-white rounded-md mx-1 my-1  w-full h-full" onClick={()=>setNumber('0')}>AC</button>
        <button className="bg-rose-700 hover:bg-rose-900 text-white rounded-md mx-1 my-1  w-full h-full" onClick={()=>setNumber(number==0 || number.startsWith('-') ?number:`-${number}`)}>+/-</button>
        <button className="bg-rose-700 hover:bg-rose-900 text-white rounded-md mx-1 my-1  w-full h-full" onClick={()=> setNumber(number == 0 ? number : number.endsWith('/') ||number.endsWith('*') || number.endsWith('-') || number.endsWith('+') ? number : number + '/')}>/</button>
      </div>
      <div className="number-section flex flex-1 w-full h-full">
        <div className="numbers w-[300px] h-full text-lg font-semibold text-white">
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('1')}>1</button>
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('2')}>2</button>          
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('3')}>3</button>          
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('4')}>4</button>          
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('5')}>5</button>          
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('6')}>6</button>          
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('7')}>7</button>          
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('8')}>8</button>
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2" onClick={()=>numberClick('9')}>9</button>
          <button className="bg-zinc-700 hover:bg-rose-900 rounded-xl mt-2 ml-2 mb-2" onClick={()=> number!==0?numberClick('0'):number }>0</button>
          <button className="font-bold  hover:bg-rose-900 text-xl bg-zinc-700 rounded-xl mt-2 ml-2 mb-2  " onClick={()=>setNumber(number == 0 ? 0+'.' : number.endsWith('.') ? number : number + '.')}>.</button>
        </div>
        <div className="operators h-full w-14 px-1   pt-2 pb-3 text-white text-xl font-semibold">
        <button className="bg-rose-700 hover:bg-rose-900 text-white rounded-md w-full h-full mb-2 pb-1"onClick={() =>setNumber(number === '0'?number: number.endsWith('*') || number.endsWith('-') || number.endsWith('+') || number.endsWith('/')?number: number + '*')}>x</button>
        <button className="bg-rose-700 hover:bg-rose-900 text-white rounded-md w-full h-full mb-2 pb-1"onClick={() =>setNumber(number === '0'?number: number.endsWith('*') || number.endsWith('-') || number.endsWith('+') || number.endsWith('/')?number: number + '-')}>-</button>
        <button className="bg-rose-700 hover:bg-rose-900 text-white rounded-md w-full h-full mb-2 pb-1"onClick={() =>setNumber(number === '0'?number: number.endsWith('*') || number.endsWith('-') || number.endsWith('+') || number.endsWith('/')?number: number + '+')}>+</button>
          <button className="bg-rose-700 hover:bg-rose-900 text-white rounded-md w-full h-full " onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

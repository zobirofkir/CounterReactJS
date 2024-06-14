import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(state + 1)
  }

  const decrement = () => {
    setState(state - 1)
  }

  const initialValue = () => {
    setState(state === 0)
  }


  return (
    <>
      <div className="flex justify-center ">
        <div className="md:bg-black md:w-screen md:h-screen md:text-center bg-gray-900 w-screen h-screen text-center ">
          <p className="text-white text-2xl font-bold bg-white p-5 mx-20 rounded-full text-black my-10 hover:bg-gray-500 transition ease-out duration-150 hover:text-white">{state}</p>
          <button onClick={increment} className="overflow-hidden mt-60 text-white font-bold text-xl uppercase m-10 md:bg-green-900 bg-green-900 p-5 rounded-full hover:bg-green-500 transition ease-out duration-150">increment</button>
          <button onClick={decrement} className="overflow-hidden mt-60 text-white font-bold text-xl uppercase m-10 md:bg-yellow-900 bg-yellow-900 p-5 rounded-full hover:bg-yellow-500 transition ease-out duration-150 ">decrement</button>
          <button onClick={initialValue} className="overflow-hidden mt-60 text-white font-bold text-xl uppercase m-10 md:bg-red-900 bg-red-900 p-5 rounded-full hover:bg-red-500 transition ease-out duration-150">initial value</button>
        </div>
      </div>
    </>
  );
}


export default App;
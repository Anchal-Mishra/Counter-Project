import { useState } from "react";
function Counter(){
    const [value, setValue] = useState(0);

  function increment() {
      setValue(value+1);
      console.log(value);
  }
  function decrement() {
    if (value < 1) {
        alert('Value is less than 0, Can not decrease the value !!! ')      
    }
    else{
        console.log(value);
        setValue(value-1)
    }


  }
  return (
    <div className="bg-red-100 flex justify-center items-center h-screen ">
      <h1 className=" border-4 rounded-2xl text-red-950 font-bold text-xl p-2 mx-4  bg-white text-center w-[100px]">{value}</h1>
      <button className="border-4 rounded-2xl text-red-950 font-bold text-xl p-2 mx-4" onClick={increment}>Increment</button>
      <button className="border-4 rounded-2xl text-red-950 font-bold text-xl p-2 mx-4" onClick={decrement}>Decrement</button>

    </div>
  )
}
export default Counter;
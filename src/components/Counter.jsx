import { useState } from "react";

const Counter = () => {
    const [score,setScore] = useState(0);
    const [hover,setHover] = useState(false);

    const buttonStyle = {
        backgroundColor: hover ? '#fdffcd' : '',
        border: '1px solid',
        padding: '0.5rem 1rem',
        marginBottom: '0.25rem',
        borderRadius: '0.25rem'
      };

  return (
    <div className="flex flex-col  border rounded max-w-fit p-3">
        <h1 className="text-emerald-700 text-center font-bold">Score: {score}</h1>
        <button className=" border px-2 py-1 mb-1 rounded" style={buttonStyle} onPointerEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => setScore(prev => prev+1)}>{hover? "Clicked" : "Click Me"}</button>
        <button className=" border px-2 py-1 mb-1 rounded" disabled={!score} onClick={() => setScore(prev => prev-1)}>Decrement</button>
        <button className=" border px-2 py-1 mb-1 rounded" onClick={() => setScore(0)}>Reset</button>
    
    </div>
  )
};

export default Counter;

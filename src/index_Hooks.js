import React, {useState,useEffect} from "react";
import ReactDOM from 'react-dom';

function LearnHooks() {
    const [count, updateCount] = useState(0);
    useEffect(()=>{
        alert("done")
    }

    )
    return (
        <div>
        <h2> u have clickedd {count} times</h2>
        <button onClick={()=> updateCount(count+1)}>Click me</button>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnHooks/>)
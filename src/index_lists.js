import React from "react";
import ReactDOM from "react-dom";
const values = ["home", " monitor", "configure", "troubleshoot", "security"]
const map1 = values.map(
    (x) => {
        return <li>{x + " *** " + values}</li>
    }
)
ReactDOM.createRoot(document.getElementById('ele1')).render(<ul>{map1}</ul>)

//thru props
function LearnList() {
    const values1 = ["a", " b", "c", "d", "e"]
    const map2 = values1.map(
        (x) => {
            return <li>{x + " *** " + values1}</li>
        }
    )
    return <ul>{map2}</ul> 
}
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnList/>)


function LearnList1(props) {
    const values1 = props.argValues;
    const map2 = values1.map(
        (x) => {
            return <li>{x + " *** " + values1}</li>
        }
    )
    return <ul>{map2}</ul> 
}
const argValues1 = ["x","y","z"]
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnList1 argValues={argValues1}/>)
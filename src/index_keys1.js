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
function LearnList(props) {
    const map2 = props.data.map(
        (x) =>
            <div key={x.id}>
                <h2>{x.id}{x.name + " *** "}</h2>
            </div>
    )
    const map3 = props.data2.map(
        (x, index) => 
            <h3> {index} {x}</h3>
    )
    return <div>{map2}{map3}</div>
}
const argValues1 = [
    {id:1, name:"dhivya"},
    {id:1, name:"dhivyaaa"},
    {id:2, name:"mano"},
    {id:3, name:"hary"}
]
const argValues2 = [
    1,2,3,4
]
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnList data={argValues1} data2 = {argValues2}/>)
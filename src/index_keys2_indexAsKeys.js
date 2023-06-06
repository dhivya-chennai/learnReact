import React from "react";
import ReactDOM from "react-dom";
function ListKey(props){
    const key = props.singleKey;
    const item = props.singleItem;
    return(
        <li>{key} ** { item}</li>
    )
}
function ListItems(props){
    const map1 = props.data.map((x,index) => 
       // <ListKey singleKey = {index} singleItem = {x}/> //sorting tuff
        <ListKey singleKey = {x} singleItem = {x}/> //sorting made easy
    );
    return <>
            <ul>{map1}</ul>
            </>
}
const data = [2,3,4,1]
ReactDOM.createRoot(document.getElementById('ele1')).render(<ListItems data={data}/>)
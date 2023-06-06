import React from "react";
import ReactDOM from 'react-dom/client';
import './App.js'
import AppComponent from "./App.js";

// CLASS COMPONENTS
class Compon1 extends React.Component {
    render() {
        return <h1> welcome </h1>
    }
}

class ParenClass extends React.Component {
    render() {
        return (
            <div>
                <Compon1/>
                <h1> to this</h1>
                <AppComponent/>
            </div>
        );
    }
}

//ReactDOM.createRoot(document.getElementById('ele1')).render(<Compon1/>)
ReactDOM.createRoot(document.getElementById('ele1')).render(<ParenClass/>)
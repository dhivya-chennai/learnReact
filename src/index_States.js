import React from "react";
import ReactDOM from "react-dom"

class LearnState extends React.Component {
    constructor() {
        super(); //so only we can initialise the state
        this.state = { initialValue:"Welcome", name:" People"}

    }
    changeValue = () => {
        this.setState({initialValue:"Thank you"})
    }
    render() {
        return <div>
            <h1> {this.state.initialValue} !! {this.state.name} </h1>
            <button onClick={this.changeValue}> Change Value </button>
        </div>
    }
}

ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnState/>)
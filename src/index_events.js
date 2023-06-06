import React from "react";
import ReactDOM from "react-dom";
import './index.scss';

class LearnEvent extends React.Component {
    constructor() {
        super()
        this.state = { msg: "welcome"}
    }
    clickme = (a) => {
        this.setState({msg: a})
    }
    render() {
        return <div>
            <h1> learning events {this.state.msg}</h1>
            <button onClick={this.clickme.bind(this,"thru bind")}> ClickMe </button>
        </div>
    }
}
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnEvent/>)
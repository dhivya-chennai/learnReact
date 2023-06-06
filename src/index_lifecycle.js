import React from "react";
import ReactDOM from "react-dom";

class LearnCycle extends React.Component {
    constructor() {
        super()
        this.state = { name:' Dhivya '};
    }
    componentWillMount() {
        alert("component will mount")
    }
    changeValue = () => {
        this.setState({name:"Changing value"})
    }
    deleteHeader = () => {
        this.setState({name:false})
    }
    render() {
        return <div><h2> Hello { this.state.name}</h2>
                <button onClick={this.changeValue}>ChangeValue</button>
                
                <button onClick={this.deleteHeader}>Delete header</button>
        </div>
    }
    componentDidMount() {
        setTimeout(() => {
            alert("component did mount")
            this.setState({name:"Manohary"})
        },9000)
    }
    componentWillUpdate() {
        alert("do u want to update value")
    }
    componentDidUpdate() {
        alert("component did update" + this.state.name)
    }
    shouldComponentUpdate() {
        return true;
    }
    componentWillUnmount() {
        alert("will unmount")
    }
}

ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnCycle/>)
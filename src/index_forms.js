import React from "react";
import ReactDOM from "react-dom";

class LearnForms extends React.Component {
    constructor() {
        super();
        this.state = { msg: "", vayasu:null, errormsg:""}
    }
    changeValue = (eve) => {
        let n1 = eve.target.name;
        let n2 = eve.target.value;        
        let err1 = "";
        if(n1 === "vayasu" && n2 !== "" && !Number(n2)) {
            err1 = " error msg "
        }
        
        this.setState({errormsg:err1})
        this.setState({ [n1]: n2})
    }
    onSubmission = (event) => {
        event.preventDefault();
        alert(this.state.msg + this.state.vayasu)
    }
    render() {
        return (
        <div>
            <form onSubmit={this.onSubmission}>
                <h1> Hello {this.state.msg} {this.state.vayasu} </h1>
                Enter your name : <input type="input" name="msg" onChange={this.changeValue}></input>
                Enter your age: <input type="input" name="vayasu" onChange={this.changeValue}></input> {this.state.errormsg}
                <input type="submit"/>
            </form>
        </div>
        )
    }
}
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnForms/>)
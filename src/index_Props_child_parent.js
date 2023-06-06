import React from "react";
import ReactDOM from 'react-dom';

class LearnProps extends React.Component {
    render() {
        return <h1> learn the props {this.props.topic} in {this.props.lang}</h1>
    }
}

//ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnProps topic="ReactJS" lang="Eng"/>)

class LearnParent extends React.Component {
    render() {
        return <h1> learn the props {this.props.jsname} in {this.props.details.place} for {this.props.price}</h1>
    }
}
class LearnChild extends React.Component {
    render() {
        const x = "ReactJS"
        const o1 = {topic:"reactjs", language:"tamil", place:"chennai"}
        return <LearnParent jsname={x} details={o1}/>
    }
}
LearnParent.defaultProps={price:"free"}
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnChild/>)
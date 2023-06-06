import React from "react";
import ReactDOM from "react-dom";

class LearnFragments extends React.Component {

    render() {
        return(
            <React.Fragment>
                <h1> first </h1>
                <p> Second </p>
            </React.Fragment>
        )
    }
}
class LearnFrag extends React.Component {

    render() {
        return(
            <>
                <LearnFragments/>
                <h1> third </h1>
            </>
        )
    }
}
ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnFrag/>)
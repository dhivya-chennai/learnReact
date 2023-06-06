import {of} from 'rxjs';
import {count} from 'rxjs/operators';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {Subject} from 'rxjs';

import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';


let all = of(1,2,3,11,22,33);
let final_all = all.pipe(count());  
console.log(all)      
const a = [];
final_all.subscribe( x => {
    a.push(x)
    console.log(a)
})
final_all.subscribe( x => {
    console.log("hi")
})

class LearnObs1 extends React.Component{
    render() {
        return(
            <>
            <h1> {this.props.msg} content</h1>
            <h2> works?</h2>
            </>
        )
        }
}

ReactDOM.createRoot(document.getElementById('ele1')).render(<LearnObs1 msg={a}/>)
console.log(" Only console logs")

const subject1 = new Subject();
subject1.subscribe({
    next: (y) => console.log("From subject1", y)
})
subject1.subscribe({
    next: (y) => console.log("From SSSS", y)
})
subject1.next(1);
subject1.next(2);

console.log("Observable makes calls to each subscribe")

const obser1 = ajax('https://jsonplaceholder.typicode.com/users/1');

obser1.subscribe(a=>console.log(a)) // first ajax call
obser1.subscribe(b=>console.log(b)) // second ajax call

console.log("solve this 2 calls by using Subject")
const s2 = new Subject();
s2.subscribe({
    next:(i) => console.log(i)
})
s2.subscribe({
    next: (j) => console.log("***"+j)
})

let whatS2todo = ajax('https://jsonplaceholder.typicode.com/users');
let oneSubscriber = whatS2todo.subscribe(Subject)


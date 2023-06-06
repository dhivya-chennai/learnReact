import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// jsx functional component -1
var style1 = {
  color: 'magenta',
  align: 'right'
}

var newEle1 = <div style={style1}>
  <h1> Hii {8*8} </h1>
  <p className='pClass'> Hru </p>
</div>

var htmlEle = ReactDOM.createRoot(document.getElementById('ele1'));
htmlEle.render(newEle1);

//functional component -2
function Footer() {
  return <h5> copyright!!! 2023 </h5>
}
function SideBar() {
  return <h2> sidebar </h2>
}
function MainWork() {
  return <h2> main work aarea</h2>
}

function MyWebSite() {
  return <div> 
    <SideBar/>
    <MainWork/>
  </div>
}
htmlEle.render(<Footer />)
htmlEle.render(<MyWebSite/>)

class Demo {
  method1() {
    var a =10;
    var b =20;
    var c = a *b;
    document.getElementById('root').innerHTML = c;
  }
}
var newObject = new Demo();
newObject.method1();

var arrow1 = (x) => {
  document.getElementById('ele1').innerHTML = x;
}
arrow1(26);

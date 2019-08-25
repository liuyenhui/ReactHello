import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// VSCode HTML 自动完成设置 "emmet.triggerExpansionOnTab": true

// ReactDOM.render(<App />, document.getElementById('root'));
// let name = "Liu Hui"
// ReactDOM.render(
//   <div>
//     <h1>Hello {name}!</h1>
//     {/* <App></App> */}
//   </div>,
//   document.getElementById('root')
// )

// 函数组件
/*
function Welcome(props){
  return <h1>Hello,{props.name} </h1>
}
*/

// 类组件
class Welcome extends React.Component{
  render(){
    return <h1>Hello,{this.props.name}</h1>
  }
}
function tick(){
  const element = (
    <div>
      <Welcome name = "Liu Hui Class Component!"></Welcome>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element,document.getElementById('root'))
}
setInterval(tick,1000)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

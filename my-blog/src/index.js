import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = 'Call Family'
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, et?";
const date = new Date();
const dateName = date.getDate();
const monthNAme = date.getMonth();
const currentYear = date.getFullYear();

const headStyle = {
  backgroundColor : "purple",
  color: "white",
  textAlign : "center",
  padding : "15px"
}

ReactDOM.render(
  <div>
    <h1 style={ headStyle }>Todo App</h1>
    <h3>{ todoTitle }</h3>
    <p>{ todoDesc }</p>
    <p>{ dateName + "/" + monthNAme + "/" + currentYear }</p>
  </div>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';


const todoTitle = 'Call Family'
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, et?";
const date = new Date();
const dateName = date.getDate();
const monthNAme = date.getMonth();
const currentYear = date.getFullYear();

ReactDOM.render(
  <div>
    <h1 className="headingStyle">Todo App</h1>
    <div className="card">
      <h3 className="cardTitle">{ todoTitle }</h3>
      <p className="cardDesc">{ todoDesc }</p>
      <p className="cardFooter">{ dateName + "/" + monthNAme + "/" + currentYear }</p>
    </div>
  </div>,
  document.getElementById('root')
);

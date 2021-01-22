import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./components/Card";


ReactDOM.render(
  <div>
    <h1 className="headingStyle">Todo App</h1>
    <Card />
    <Card />
    <Card />
  </div>,
  document.getElementById('root')
);

import React from "react";
import Card from "./components/Card";

function App(){
    return  <div>
                <h1 className="headingStyle">Todo App</h1>
                <Card titleText="Call Mother" descText="this is desc1"/>
                <Card titleText="Call Father" descText="this is desc2"/>
                <Card titleText="Call Wife" descText="this is desc3"/>
            </div>
}

export default App;
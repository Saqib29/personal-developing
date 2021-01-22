import React from "react";
import Card from "./components/Card";
import Data from './data.json';


function App(){

    let items = [];
    for(let x=0; x<Data.length; x++){
        items.push(<Card titleText={Data[x].title} descText={Data[x].desc}/>);
    }

    return  <div>
                <h1 className="headingStyle">Todo App</h1>
                {items}
            </div>
}

export default App;
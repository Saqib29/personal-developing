import React from "react";
import Card from "./components/Card";
import Data from './data.json';


function App(){

    return  <div>
                <h1 className="headingStyle">Todo App</h1>
                {Data.map((data) => <Card titleText={data.title} descText={data.desc}/>)}
            </div>
}

export default App;
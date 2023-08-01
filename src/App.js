import "./App.css";
import Child from '../src/Components/Child'
import React,{useContext} from "react";
import SuperChild from "./Components/SuperChild";
import { ChildContext } from "../src/Components/Child";

function App() {
  const {color} = useContext(ChildContext);
  return (
    <div className="App">
      <h1 style={{color:color}}>App Component</h1>
      <Child/>
      <SuperChild/>
    </div>
  );
}

export default App;

import React from "react"; 
import './App.css';
import Nav from './Nav';
import About from "./About";
import Shop from "./Shop";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    
      <h1> My App Ranjan </h1>
      <Nav />
      <Route path="/home"component={Home}/>
      <Route path="/about"component={About}/>
      <Route path="/shop"component={Shop}/>
 
      
    </div>
    </Router>
  );
}

const Home=()=>{
 return(<div>
  <h1> My Home Page</h1>
</div>)

};
export default App;

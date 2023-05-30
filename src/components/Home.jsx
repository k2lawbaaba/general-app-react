import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./Button";
import ToDoList from "./ToDoList";
import Fetch from "./Fetch";


const Home=()=>{
    return(
        <div className="container">
        <h1 id='authenHeading'>Welcome to <strong>myApp</strong></h1>
        
        <Router>
          <div className="btnDiv"><Link to="/ToDoList"><Button type="submit" text="Todo List" class="btn"/></Link></div>
          <div className="btnDiv"><Link to="/Fetch"><Button type="submit" text="Fetch API" class="btn"/></Link></div>
          
          
          <Routes>
            
            <Route path="/ToDoList" element={<ToDoList />} />
            
            <Route path="/Fetch"  element={ <Fetch />} />
            
      
          </Routes>
      
          </Router>
      
          </div>
    )
}
export default Home;
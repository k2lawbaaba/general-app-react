import React from "react";
import Authentication from "./Authentication";
import ToDoList from "./ToDoList";
import Button from "./Button";
import Fetch from "./Fetch";
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
 
  return (
    <div className="container">
  <h1 id='authenHeading'>Welcome to <strong>myApp</strong></h1>
  
  {/* <Router> */}
    {/* <div className="btnDiv"><Link to="/ToDoList"><Button type="submit" text="Todo List" class="btn"/></Link></div> */}
    {/* <div className="btnDiv"><Link to="/Fetch"><Button type="submit" text="Fetch API" class="btn"/></Link></div> */}
    {/* <div className="btnDiv"><Link to="/Authentication"><Button type="submit" text="Login/SignUp" class="btn"/></Link></div> */}
    
    {/* <Routes> */}
      {/* <Route path="/Authentication" element={<Authentication />} /> */}
      
      {/* <Route path="/ToDoList" element={<ToDoList />} /> */}
      
      {/* <Route path="/Fetch"  element={ <Fetch />} /> */}
      

    {/* </Routes> */}

    {/* </Router> */}
    {/* <Button type="submit" text="Login/SignUp" class="btn"/> */}
    <Authentication />
    </div>
  );
}

export default App;

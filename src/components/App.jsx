import React from "react";
// import Authentication from "./Authentication";
import ToDoList from "./ToDoList";

const isRegistered=true;

function check(){

 if(isRegistered === false)
 {
   return alert("Registration complete");
 }
 else{
   return alert('Welcome back!!!');
 }
}
function App() {
 
  return (
    <div className="container">
    <ToDoList />
      {/* <Authentication login={isRegistered} click={check} /> */}
    </div>
  );
}

export default App;

import React from 'react';
import Login from "./Login";
// import Register from './Register';



const Authentication=(prop)=>{

  // return (!prop.login)? <Register click={prop.click}/> : <Login click={prop.click}/> 
  return <Login click={prop.click} text={prop.login}/>
}
export default Authentication;
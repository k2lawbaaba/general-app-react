import {useState} from 'react';
import Login from "./Login";
import Button from './Button'





const Authentication=(prop)=>{
  const [isRegistered, setReg]= useState(false);
  

  const signUp=()=>setReg(true)
  const login=()=>setReg(false)

  return <div className='task'>
 <p>Create an Account?
  {(!isRegistered)?
   <Button click={signUp}  text="Sign up" class="yesNoBtn"/>: 
   <Button click={login} value="true" text="Login" class="yesNoBtn"/> 
   }
 </p>
  <Login logReg={isRegistered} /> 
  
  </div>
}
export default Authentication;
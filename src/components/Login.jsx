import React from 'react';
import Form from './Form';
import Button from './Button';

const checkClick=()=>{
  return this.value;
}

const Login=(props)=>{
 return <> 
 <h1>Welcome to my general App</h1>
 <p>Create an Account?
   <Button type='submit' click={checkClick} value="false" text="Sign up" class="yesNoBtn"/> 
   <Button type='submit' click={checkClick} value="true" text="Login" class="yesNoBtn"/> 
 </p>
 {}
 <Form type="text" placeholder="Username" />
 <Form type="password" placeholder="Password" />
 {!props.text && <Form type="password" placeholder="Confirm Password" />}
 
 <Button type="submit" text={!props.text? "Register" : "Login"} click={props.click} />
 <p></p>
    </>
}
export default Login;
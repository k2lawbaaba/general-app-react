import {useState} from 'react';
import Form from './Form';
import Button from './Button';



const Login=(props)=>{
 
  const [userName, setName] = useState('');
  const [passWord, setPwd] = useState('');
  
    
    const getUsername=(evt)=>setName(evt.target.value);
   
   const getPassword=evt=>setPwd(evt.target.value);
  
    // const getPassword=(evt)=> 
    
    function check(e){
      e.preventDefault();
    
   if(!props.logReg)
   {
     return alert(`Welcome back!!! \nUsername: ${userName}.\nPassword: ${passWord}.`);
  }
  else{
     return alert(`Registration complete \nUsername: ${userName}.\nPassword: ${passWord}.`);
   }
  }
 
 
 return <> 
 <Form class="loginInput" onChange={getUsername} type="text" placeholder="Username" />
 <Form class="loginInput" onChange={getPassword} type="password" placeholder="Password" />
 {props.logReg && <Form class="loginInput" type="password" placeholder="Confirm Password" />}
 
 <Button class='loginRegBtn'type="submit" text={props.logReg? "Register" : "Login"} click={check} />
 <p></p>
    </>
}
export default Login;
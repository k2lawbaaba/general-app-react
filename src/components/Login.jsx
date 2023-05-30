import {useState} from 'react';
import Form from './Form';
import Button from './Button';
import CardDetails from './CardDetails';
import Home from './Home';



const Login=(props)=>{
 
  const [userName, setName] = useState('');
  const [passWord, setPwd] = useState('');
  const [confirdPassWord, setConfPwd] = useState('');
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");
  const [UserNameDetails, setUserNameDetails] = useState([]);
  const [userPwd, setUserPwd] = useState([]);
  const [loggedIn, setLog] = useState(false)
  
    
    const getUsername=(evt)=>{
      const temp= evt.target.value;
      setName(temp);
      // handleUserDetails();
    }
   const getPassword=evt=>{
    const tempPwd= evt.target.value;
    setPwd(tempPwd);
    // handleUserDetails();

   }
   const getConfPassword=evt=>
   {
    setConfPwd(evt.target.value);
   }

   const handleUsername=(e)=>{
    (userName !=="")?setUserNameDetails(currentDetails=>[...currentDetails,userName]):setWarning("Username must not be empty")
   }

   const handlePassword=(e)=>{
    if(confirdPassWord !=="" && passWord !=="" && confirdPassWord === passWord)
   { 
    setWarning("")
    setUserPwd(currentDetails=>[...currentDetails,passWord])
    setSuccess("Registration was successful, Click on Login to continue")
    setConfPwd("")
    setName("")
    setPwd('')
   }
    else{
      
      (confirdPassWord!=="" && passWord !=="")?setWarning("Unmatched Password"):setWarning("Password must not be empty");
    }
 }
      const resetFields=(e)=>{
        setSuccess("");
        setWarning("");
      }
  const handleUserDetails=(e)=>{
    e.preventDefault();
      handlePassword();
      handleUsername()
  }
    
    function checkLoginDetails(e){
      e.preventDefault();
    if ( UserNameDetails.find(item=>item === userName) && userPwd.find(pwd=> pwd === passWord))
    {
      alert(`Welcome back!!! \nUsername: ${userName.toLocaleUpperCase()}`)
      setName('')
      setLog(true)
      setPwd('')

    }
    else{
      alert(`Login details not found!`);

    }
  
  }
 
 
 return <> 
 <CardDetails info={warning} />
 <Form class="loginInput" onChange={getUsername} type="text" placeholder="Username" id="Username" focus={resetFields} value={userName}  />
 <Form class="loginInput" onChange={getPassword} type="password" placeholder="Password"  id="Password" focus={resetFields} value={passWord} />
 {props.logReg && <Form class="loginInput" type="password" placeholder="Confirm Password" id="Confirm Password" onChange={getConfPassword} focus={resetFields} value={confirdPassWord}/>}
 <Button class='loginRegBtn'type="submit" text={props.logReg? "Register" : "Login"} click={props.logReg? handleUserDetails : checkLoginDetails}/>
 <div><CardDetails info={props.logReg? success: ""} /></div>
 {(loggedIn)?<Home />:null}
 <p></p>
    </>
}
export default Login;
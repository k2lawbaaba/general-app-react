import React from 'react';
import Form from './Form';
import Button from './Button';

const Register=(props)=>{
  return<>
  <Form type="text" placeholder="Username" />
  <Form type="password" placeholder="Password" />
  <Form type="password" placeholder="Confirm Password" />
  <Button type="submit" text="Register" click={props.click} />

  </>
}
export default Register;
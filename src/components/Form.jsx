import React from 'react';
import './styles.css'
const Form=(props)=>{
  return <form>
    <input type={props.type} placeholder={props.placeholder}  className={props.class} onChange={props.onChange} value={props.value}/>
  </form>
}
export default Form;
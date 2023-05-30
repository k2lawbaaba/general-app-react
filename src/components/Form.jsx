import React from 'react';
import './styles.css'
const Form=(props)=>{
  return <form>
    <label htmlFor={props.id}>{props.id}:</label>
    <input type={props.type} placeholder={props.placeholder}  className={props.class} onChange={props.onChange} value={props.value} id={props.id} onFocus={props.focus}/>
  </form>
}
export default Form;
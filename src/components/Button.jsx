import React from 'react';
import './styles.css'

const Button =(props)=>{
return<button className={props.class} value={props.value} type={props.type} onClick={props.click}>{props.text}</button>
}
export default Button;
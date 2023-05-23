import {useState} from "react";
import Button from "./Button";
import Form from "./Form";




const ToDoList=()=>{

    const [list, setList] = useState('');
    const [Uplist, setUpList] = useState(list);


    //getting the user input 
    const Change=evt=>setList(evt.target.value);

    // performing click function on the button
     const addList=()=>{
        setUpList(list)
        return <h2 className="list">{Uplist}</h2> 
        //  <Button text='Delete' class="yesNoBtn" /> 
          
       }
    return<>
        <div className="ToDoDiv">
        <Form type="text" placeholder="Enter your to-do here" onChange={Change} value={list} class="toDo"/>
        <Button text='Add' click={addList} class="yesNoBtn" />
        </div>

    </>
}
export default ToDoList;
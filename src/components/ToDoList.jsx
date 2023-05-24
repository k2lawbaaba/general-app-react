import {useState} from "react";
import Button from "./Button";
import Form from "./Form";


   

const ToDoList=()=>{

    const [list, setList] = useState('');
    const [todo, setTodo]= useState([]);
    const [editId, setId] = useState(0);

    //getting the user input 
    const Change=evt=>
    {
        evt.preventDefault();
        setList(evt.target.value);
    }

    // performing click function on the button
     const addList=(e)=>{
        e.preventDefault();

        if(editId)
        {
            const editedItem= todo.find(item=> item.id === editId);

            //searching for the found item to edit using map
            const updatedList= todo.map(lItem=>
                (lItem.id === editedItem.id)?
                (lItem ={id:lItem.id, list}):
                {id:lItem.id, list: lItem.list}
                    );
                setTodo(updatedList)
                setId(0)
                setList("")
                return;
        }
        if(list !=="")setTodo([{id:`${list}+${Date.now()}`, list},...todo]);
        setList('')
       
    }

    const editList=(selected)=>{
        const edited=todo.find(findItem => findItem.id === selected)
        setList([edited.list])
        setId(selected);
    }

    return<>
        <div className="ToDoDiv">
        <h1>To do List App</h1>
        <div className="innerDiv">
        <Form type="text" placeholder="Enter your to-do here" onChange={Change} value={list} class="toDoInput"/>
        <Button text={(editId)? 'Edit': 'Add'} click={addList} class="addBtn" />
        </div>
        <ul>
            {
                todo.map(item=>
                <li className="todoitems" key={item.id}>
                <span className="textInput" >{item.list}</span>
                <Button text='Edit' class="addBtn" click={()=>{
                    editList(item.id)
                }}  /> 
                <Button text='Delete' class="addBtn" 
                    click={()=>{ 
                        const del=todo.filter((ite)=>(ite.id !== item.id))
                        setTodo(del)
                    }
                } /> 
            </li>
            
                )
            }           

        </ul>
       
        </div>
    </>
}
export default ToDoList;
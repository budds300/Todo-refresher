import React,{useState} from 'react'
import TodoForm from './TodoForms'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

const Todo = ({todos,completeTodo,removeTodo,updateTodo}) => {
const[edit,setEdit]=useState({
    id:null,
    value:''
})
const submitUpdate= value =>{
    updateTodo(edit.id,value)
    setEdit({
        id:null,
        value:''
    })
}
if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate}/>
}

  return (
<div className='max-w-md mx-auto'>
{
    todos.map((todo,index)=>(
      <div className={todo.isComplete?'todo-row complete   ':'todo-row mt-8 '} key={index}>
      <div className='flex items-center justify-between border-b-2 py-2'>
      <div key={todo.id} onClick={()=>completeTodo(todo.id)}>
          {todo.text}
      </div>
      <div className='icons flex space-x-2'>
      <RiCloseCircleLine className='flex-none' onClick={()=> removeTodo(todo.id)}/>
      <TiEdit className='flex-none' onClick={()=>setEdit({id:todo.id,value:todo.text})}/>
      </div>
      
      </div>
      </div>
    )
    
      
    )

}
</div>
  );
}

export default Todo


import React,{useState} from 'react'
import TodoForm from './TodoForms'
import Todo from './Todo'

const TodoList = () => {
    const[todos,setTodos]=useState([])
    const addTodo= todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos= [todo,...todos]
        setTodos(newTodos)
        console.log(...todos);    
    }
    const completeTodo=id=>{
        let updatedTodos= todos.map(todo=>{
            if(todo.id === id){
                todo.isComplete=!todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId? newValue:item)))


    }
    const removeTodo=id=>{
        const removeArr = [...todos].filter(todo=>todo.id !== id)
        setTodos(removeArr)
    }


  return (
    <div className='todo-app'>
    <h1></h1>
      <TodoForm onSubmit={addTodo}/> 
      <Todo
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
      />
      
    </div>
  )
}

export default TodoList

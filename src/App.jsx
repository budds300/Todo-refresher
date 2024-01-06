import { useState } from 'react'
import TodoForm from './components/TodoForms'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      ToDo
      <TodoList/>

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from  './components/CreateTodo.jsx'
import { Todos } from './components/Todos.jsx'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}
      />
    </div>
  )
}

export default App

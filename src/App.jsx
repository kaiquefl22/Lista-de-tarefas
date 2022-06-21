import { useState } from 'react'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação2',
      completed : false,
    },   
    {
      id: '2',
      title: 'Ler Livros',
      completed : true,
    }
  ])
  return (
    <div className="App">
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
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
        <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}

export default App

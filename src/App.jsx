import './App.css'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'

function App() {

  return (
    <div className='App'>
      <h1>My Todo List</h1>
      <AddTodos/>
      <Todos/>
    </div>
  )
}

export default App

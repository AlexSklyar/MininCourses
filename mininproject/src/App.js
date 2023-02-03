import React, { useState, useEffect, Suspense} from "react"
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from "./Loader"
import Modal from "./Modal/Modal"

const AddTodo = React.lazy(()=>import("./Todo/AddTodo"))

function App() {
  let [todos, setTodos] = useState([])
  let [loading, setLoading] = useState(true)

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
.then(response => response.json())
.then(todos => {
  setTimeout(()=>{
    setTodos(todos) 
    setLoading(false)
  },1000)
  
})
}, [])

function toggleTodo(id){
  setTodos(todos.map(todo=>{
    if(todo.id === id){
      todo.complited = !todo.complited
    }
    return todo
  }))
}

function removeTodo(id){
setTodos(todos.filter(todo=>todo.id!==id))
}

function addTodo(title){
setTodos(todos.concat([{
  id: Date.now(),
  complited: false,
  title
}]))
}

  return (
<Context.Provider value ={{removeTodo}}>
<div className="wrapper">
<h1>React Tutorial</h1>
<Modal/>
<React.Suspense>
<AddTodo onCreate={addTodo}/>
</React.Suspense>
{loading && <Loader/>}
{todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : (loading)? null : <h2>Todo List is empty!</h2>}
</div>
</Context.Provider>
  )
}

export default App;

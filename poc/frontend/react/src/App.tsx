import { useState } from 'react'

function App() {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState<string[]>([])

  function addTodo() {
    setTodos([...todos, todoInput])
    setTodoInput('')
  }

  function removeTodo(index: number) {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <>
      <h1 className="font-bold text-5xl">TODO</h1>
      <p>My awesome TODO app for the AREA POC!</p>

      <br />

      <ul className="list-disc mx-7">
        {todos.map((todo, index) => (
          <div key={index} className="flex flex-row gap-2">
            <li>{todo}</li>
            <button className="border-2 px-2" onClick={() => removeTodo(index)}>Remove</button>
          </div>
        ))}
      </ul>

      <br />

      <div>
        <input
          className="border-2"
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Enter your TODO here!"
        />
        <button className="border-2 px-2" onClick={addTodo}>Add</button>
      </div>
    </>
  )
}

export default App

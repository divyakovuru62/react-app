import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Count: {count}</h1>

        <div>
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </>
  )
}

export default App

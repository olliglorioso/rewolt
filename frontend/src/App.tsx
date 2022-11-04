import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>ReWolt</h1>
      <p>Brand new modern website to recycle your trash without any effort</p>
      <p>We will beat some trash out of you!</p>
    </div>
  )
}

export default App

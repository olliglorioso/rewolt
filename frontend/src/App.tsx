import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TextField from '@mui/material/TextField';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TextField id="outlined-basic" label="Username" variant="outlined" />
    </div>
  )
}

export default App

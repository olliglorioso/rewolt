import { useState } from 'react'
import TextField from '@mui/material/TextField';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TextField id="outlined-basic" label="Username" variant="outlined" />
    </div>
  )
}

export default App

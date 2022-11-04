import { useState } from 'react'
import TextField from '@mui/material/TextField';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RegisterPage />
    </div>
  )
}

export default App

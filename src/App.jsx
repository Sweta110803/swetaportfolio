import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './assets/component/Nav'
import Home from './assets/component/Home'
import What from './assets/component/What'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <Nav />
  <Home />
  <What />
  </>
  )
}

export default App

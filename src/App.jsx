import React from 'react'
import Logo from './components/Logo'
import Hero from './components/Hero'
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container main">
      <Logo />
      <Hero />
    </main>
  )
}

export default App

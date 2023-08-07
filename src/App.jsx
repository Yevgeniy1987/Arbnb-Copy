import React from 'react'
import Logo from './components/Logo'
import Hero from './components/Hero'
import { useState } from 'react'

import './App.css'
import { Cards } from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container main">
      <Logo />
      <Hero />
      <Cards />
    </main>
  )
}

export default App

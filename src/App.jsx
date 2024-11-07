import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-326px)]">
        <h1>Hello</h1>
        <h2>Surnaly</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

      <div className="body">
      <span>hello friends</span>
      </div>
    </>
  )
}

export default App

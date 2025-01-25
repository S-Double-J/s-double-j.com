import '../../styles/App.css'
import '../../styles/textStyles.css'
import { Outlet, ScrollRestoration } from "react-router-dom"
import Nav from './Nav';
import { useState } from 'react';
function App() {
const [complete, setComplete] = useState(true)

const handleComplete = (bool : boolean) => {
  setComplete(bool)
}

  return (
    <>
    <Nav complete={complete} handleComplete={handleComplete}>
    <Outlet context={{complete, handleComplete}}/>
    </Nav>
    <ScrollRestoration
    getKey={(location => {
      return location.pathname;
    })}
    />
    </>
  )
}

export default App

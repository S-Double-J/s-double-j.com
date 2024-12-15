import '../../styles/App.css'
import '../../styles/textStyles.css'
import { Outlet, ScrollRestoration } from "react-router-dom"
import Nav from './Nav';
function App() {


  return (
    <>
    <Nav>
    <Outlet />
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

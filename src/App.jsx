import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {


  return (
    <>
      <Navbar />
      <br/>
      <Outlet/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ProSidebar className="sidenav " >
    <Menu>
      <MenuItem 
       >Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
    </Menu>
  </ProSidebar>
    </>
  )
}

export default App

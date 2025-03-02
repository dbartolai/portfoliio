import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar.jsx'
import Window from './Window.jsx'

function App(){

  const [activePage, setActivePage] = useState('About Me')

  function sidebarClick(text) {
      console.log(text)
      console.log('function runs')
      setActivePage(text)
  }


  return (
    <>
    <div className='app'>
      <Sidebar activePage={activePage} setActivePage={sidebarClick}/>
      <Window windowTitle={activePage}/>
    </div>
    </>
  )
}

export default App

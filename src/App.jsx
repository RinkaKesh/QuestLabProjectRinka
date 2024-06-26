import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navabar/Navbar'
import Header1 from './components/Header1/Header1'
import Midsec1 from './components/Midsec1'
import Midsec2 from './components/Midsec2'
import Midsec3 from './components/Midsec3'
import Midsec4 from './components/Midsec4'
import Sec5 from './components/Sec5'
import Sec6 from './components/Sec6'
import Footer from './components/Footer'
function App() {
 
  return (
    <>
      <Navbar/>
      <Header1/>
      <Midsec1/>
      <Midsec2/>
      <Midsec3/>
      <Midsec4/>
      <Sec5/>
      <Sec6/>
      <Footer/>
    </>
  )
}

export default App

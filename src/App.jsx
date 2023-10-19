import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/Global.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Map from './pages/Map'
import Favourite from './pages/Favourite'
import Profile from './pages/Profile'
import {Routes, Route} from 'react-router-dom'
import BottomNav from './components/BottomNav'
import GymDetailsPage from './pages/GymDetailsPage'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BottomNav/>
      <Routes>
        <Route path="/" element={<Home text="Home" />} />
        <Route path="/map" element = {<Map text="Map" />} />
        <Route path="/favourite" element={<Favourite text="Favourite" />} />
        <Route path="/profile" element = {<Profile text="Profile" />} />
        <Route path="/details/:gymId" element = {<GymDetailsPage />} />
      </Routes>
    </>
  )
}

export default App

// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile/:user' element={<Profile/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <nav>
        <Link to="/home">Home</Link>
        <Link to='profile'>Profile</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </Router>
  )
}

export default App

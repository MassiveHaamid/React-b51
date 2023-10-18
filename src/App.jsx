import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';

function App() {

  const padding = {
    padding: 5,
  }

  return (
    <Router>
      <div>
        <Link to='/' style={padding}>home</Link>
        <Link to='/notes' style={padding}>notes</Link>
        <Link to='/users' style={padding}>users</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/users' element={ <Users />} />
      </Routes>
    </Router>
  )
}

export default App;
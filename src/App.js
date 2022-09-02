import './App.css';
import * as React from 'react';
import ResponsiveAppBar from './components/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return <div className='background_image'>
  <ResponsiveAppBar/>
  <Routes>
    <Route path='/' element={<Home />} />
    {/* <Route path='about' element={<About />} /> */}
    <Route path='blog' element={<Blog />} />
    <Route path='projects' element={<Projects />} />
    <Route path='contact' element={<Contact />} />
  </Routes>
  </div>
}

export default App;

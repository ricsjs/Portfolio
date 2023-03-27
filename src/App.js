import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import logotipo from './components/img/logotipo.png';
import img from './components/img/img.png';

import NavBar from './components/layout/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Techs from './Pages/Techs';
import Contact from './Pages/Contact';
import Html from './Pages/Html';
import Php from './Pages/Php';
import Css from './Pages/Css';
import Bootstrap from './Pages/Bootstrap';
import React from './Pages/React';
import Wordpress from './Pages/Wordpress';


function App() {
  return (
    <Router>
      
      <NavBar src={logotipo} alt="logotipo"></NavBar>

      <Routes>
          <Route exact path="/" element={<Home src={img} alt="image"></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/techs" element={<Techs></Techs>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path='/php' element={<Php></Php>} />
          <Route path='/html' element={<Html></Html>} />
          <Route path='/css' element={<Css></Css>} />
          <Route path='/bootstrap' element={<Bootstrap></Bootstrap>} />
          <Route path='/react' element={<React></React>} />
          <Route path='/wordpress' element={<Wordpress></Wordpress>} />
        </Routes>

    </Router>
    
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Candy from './components/Candy';
import Choco from './components/Choco';
import Contacts from './components/Contacts';
import Reviews from './components/Reviews';
import Seasons from './components/Seasons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
          <Router>
        <div className='main'>
        <Navbar />
        <Routes>
          <Route path="/"element={<Home/>} />
          <Route path="/candy" element={<Candy/>} />
          <Route path="/choco" element={<Choco/>} />
          <Route path="/seasons" element={<Seasons/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </div>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;

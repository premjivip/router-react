import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/HeaderComponent';
import Footer from './component/FooterComponent';
import Home from './component/HomePage';
import About from './component/AboutPage';
import Departments from './component/DepartmentPAge';
import Events from './component/Event';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/router-react"  element={<Home />} />
          <Route path="/college"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        
      </main>
      <Footer />
    </Router>
  );
};

export default App;

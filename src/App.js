import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import About from './pages/about/about';
import Calendar from './pages/beta/calendar/calendar';
import Contact from './pages/contact/contact';



class App extends React.Component {
  render() {
    
    return (
      <div className='pa-3 App'>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />



          {/* Testing */}
          <Route exact path="/beta/calendar" element={<Calendar/>} />
        </Routes>
        
      </div>
    )
  }
}

export default App;

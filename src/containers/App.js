import './App.css';
import React from 'react';
import LogoImage from '../components/LogoImage';
import FadeIn from 'react-fade-in';
import Navbar from '../components/Navbar';


class App extends React.Component {
  render() {
    return (
      <div className='tc pa3 App'>
        <Navbar/>
        <h1 className='f1'>We are Currently Building our Website</h1>
        <h2 className='f2'>Feel Free to Contact Us</h2>
        <FadeIn transitionDuration={3000}>
          <LogoImage />
        </FadeIn>
        <FadeIn delay={3000} transitionDuration={1000}>
          <a className='email' href="mailto:julien@j-squaredstudios.com">julien@j-squaredstudios.com</a>
        </FadeIn>
      </div>
    )
  }
}

export default App;

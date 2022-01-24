import './App.css';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeaderImage from '../components/HeaderImage/HeaderImage';


class App extends React.Component {
  render() {
    return (
      <div className='pa-3 App'>
        <Navbar/>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-4 d-flex p-4 headerText'>
              <h4>Testing</h4>
            </div>
            <div className='col-8'>
              <HeaderImage />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

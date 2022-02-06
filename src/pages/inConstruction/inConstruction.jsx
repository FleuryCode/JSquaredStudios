import React from 'react';
import './inConstruction.styles.scss';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Contact from '../contact/contact';

class inConstruction extends React.Component {
    render() {
        return(
            <div className='inConstruction container-fluid'>
                <div className="row">
                    <div className="col-12">
                        <h1>We are Currently Building our Website</h1>
                        <h3>Feel Free to Contact Us</h3>
                    </div>
                    <div className="col-12 mt-5">
                        <FadeIn transitionDuration={3000}>
                            <Contact/>
                        </FadeIn>
                    </div>
                </div>
            </div>
        );
    }
}

export default inConstruction;
import './HeaderImage.css';
import React from 'react';
import TestImage from './bopCelis.jpg'


const HeaderImage = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 imageContainer">
                    <img src={TestImage} alt="Testing" />
                </div>
            </div>
        </div>
    );
}

export default HeaderImage;
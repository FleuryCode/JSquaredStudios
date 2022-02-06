import React from 'react';
import './LogoImage.css';
import logo from '../../containers/j2logo.svg';






const LogoImage = () => {
    return (
        <img className='logo' src={logo} alt='Logo of J-Squared Studios' />
    )
}

export default LogoImage;
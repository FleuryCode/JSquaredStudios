import './HeaderImage.css';
import React from 'react';
import TestImage from './bopCelis.jpg';
import TestImage2 from './colorfulBrunch.jpg';
import TestImage3 from './comSandwich.jpg';

let scrollValue = 1;
window.addEventListener('mousewheel', function (e) {
    if (e.deltaY / 120 > 0) {
        if (scrollValue === 3) {
            scrollValue = 1;
        } else {
            scrollValue++;
        }
    } else {
        if (scrollValue === 1) {
            scrollValue = 3;
        } else {
            scrollValue--;
        }
    }
    const imageOne = 'heroImage-1';
    const imageTwo = 'heroImage-2';
    const imageThree = 'heroImage-3';

    if(scrollValue === 1) {
        this.document.getElementById(imageTwo).classList.remove('mainImageDisplay');
        this.document.getElementById(imageThree).classList.remove('mainImageDisplay');
        this.document.getElementById(imageOne).classList.add('mainImageDisplay');
    }else if(scrollValue === 2) {
        this.document.getElementById(imageOne).classList.remove('mainImageDisplay');
        this.document.getElementById(imageThree).classList.remove('mainImageDisplay');
        this.document.getElementById(imageTwo).classList.add('mainImageDisplay');
    }else if(scrollValue === 3) {
        this.document.getElementById(imageOne).classList.remove('mainImageDisplay');
        this.document.getElementById(imageTwo).classList.remove('mainImageDisplay');
        this.document.getElementById(imageThree).classList.add('mainImageDisplay');
    }
});

const HeaderImage = () => {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 imageContainer">
                    <img id='heroImage-1' className='mainImage mainImageDisplay' src={TestImage} alt="Testing" />
                    <img id='heroImage-2' className='mainImage' src={TestImage2} alt="Testing" />
                    <img id='heroImage-3' className='mainImage' src={TestImage3} alt="Testing" />
                </div>
            </div>
        </div>
    );
}

export default HeaderImage;
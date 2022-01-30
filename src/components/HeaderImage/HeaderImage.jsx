import './HeaderImage.css';
import React from 'react';
import TestImage from './bopCelis.jpg';
import TestImage2 from './colorfulBrunch.jpg';
import TestImage3 from './comSandwich.jpg';



let index = 1;
let endAnim = true;

const mouseWheelUp = () => {
    endAnim = false;
    document.getElementById('heroImage-' + (index)).classList.add('mainImageDisplay');
    document.getElementById('heroImage-' + (index - 1)).classList.remove('mainImageDisplay');
    setTimeout(() => {
        endAnim = true;
    }, 800);
}

const mouseWheelDown = () => {
    endAnim = false;
    document.getElementById('heroImage-' + (index)).classList.add('mainImageDisplay');
    document.getElementById('heroImage-' + (index + 1)).classList.remove('mainImageDisplay');
    setTimeout(() => {
        endAnim = true;
    }, 800);
}

document.body.addEventListener('wheel', function (e) {
    if (endAnim) {
        if (e.deltaY / 120 > 0) {
            if (index === 1) {
                index = 3;
                endAnim = false;
                document.getElementById('heroImage-' + (index)).classList.add('mainImageDisplay');
                document.getElementById('heroImage-' + (index - 2)).classList.remove('mainImageDisplay');
                setTimeout(() => {
                    endAnim = true;
                }, 800);
            } else {
                index--;
                mouseWheelDown();
            }
        } else {
            if (index === 3) {
                index = 1;
                endAnim = false;
                document.getElementById('heroImage-' + (index)).classList.add('mainImageDisplay');
                document.getElementById('heroImage-' + (index + 2)).classList.remove('mainImageDisplay');
                setTimeout(() => {
                    endAnim = true;
                }, 800);
            } else {
                index++;
                mouseWheelUp();
            }
        }
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
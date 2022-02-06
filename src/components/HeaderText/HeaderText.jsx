import React from "react";
import './HeaderText.css';



const HeaderText = () => {
    let index = 1;
    let endAnim = true;

    const mouseWheelDown = () => {
        endAnim = false;
        document.getElementById('mainHeader-' + (index)).classList.add('mainHeaderDisplay');
        document.getElementById('mainHeader-' + (index + 1)).classList.remove('mainHeaderDisplay');
        setTimeout(() => {
            endAnim = true;
        }, 800);
    }

    const mouseWheelUp = () => {
        endAnim = false;
        document.getElementById('mainHeader-' + (index)).classList.add('mainHeaderDisplay');
        document.getElementById('mainHeader-' + (index - 1)).classList.remove('mainHeaderDisplay');
        setTimeout(() => {
            endAnim = true;
        }, 800);
    }

    document.body.addEventListener('wheel', function (e) {
        if (endAnim) {
            if (e.deltaY / 120 > 0) {
                if (index === 3) {
                    index = 1;
                    endAnim = false;
                    document.getElementById('mainHeader-' + (index)).classList.add('mainHeaderDisplay');
                    document.getElementById('mainHeader-' + (index + 2)).classList.remove('mainHeaderDisplay');
                    setTimeout(() => {
                        endAnim = true;
                    }, 800);
                } else {
                    index++;
                    mouseWheelUp();
                }
            } else {
                if (index === 1) {
                    index = 3;
                    endAnim = false;
                    document.getElementById('mainHeader-' + (index)).classList.add('mainHeaderDisplay');
                    document.getElementById('mainHeader-' + (index - 2)).classList.remove('mainHeaderDisplay');
                    setTimeout(() => {
                        endAnim = true;
                    }, 800);
                } else {
                    index--;
                    mouseWheelDown();
                }
            }
        }
    });
    return (
        <div className="headerTextMain">
            <div id="mainHeader-1" className="mainHeader mainHeaderDisplay">
                <h1>Hello World One</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum quos nesciunt dicta doloremque itaque tenetur, cum magnam saepe at earum fuga perferendis quo unde suscipit odio, hic deserunt? Esse.</h4>
            </div>
            <div id="mainHeader-2" className="mainHeader">
                <h1>Hello World Two</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum quos nesciunt dicta doloremque itaque tenetur, cum magnam saepe at earum fuga perferendis quo unde suscipit odio, hic deserunt? Esse.</h4>
            </div>
            <div id="mainHeader-3" className="mainHeader">
                <h1>Hello World Three</h1>
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illum quos nesciunt dicta doloremque itaque tenetur, cum magnam saepe at earum fuga perferendis quo unde suscipit odio, hic deserunt? Esse.</h4>
            </div>

        </div>
    );
}

export default HeaderText;
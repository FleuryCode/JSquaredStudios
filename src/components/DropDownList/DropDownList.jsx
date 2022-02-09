import React from 'react';
import './DropDownList.styles.scss';

class DropDownList extends React.Component {
    constructor({ serviceList }) {
        super()


        this.state = {
            isMenuHidden: true,
            serviceList: serviceList
        }

    }
    render() {

        const toggleList = () => {
            this.setState({
                isMenuHidden: !(this.state.isMenuHidden)
            })
        }
        return (
            <div className='dropdown-container'>
                <div className="service-container d-flex flex-row justify-content-evenly">
                    <p>Services</p>
                    <button onClick={toggleList} className='serviceButtonTest'>Click Me</button>
                </div>
                {
                    this.state.isMenuHidden ? null :
                        <div className="service-items">
                            {
                                this.state.serviceList.map(service => (
                                    <p key={service} >{service}</p>
                                ))
                            }
                        </div>
                }


            </div>
        );
    }

}

export default DropDownList;
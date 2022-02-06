import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({messageSending, handleSubmit, ...otherProps}) => {
    return(
        <div className="customButtonContainer">
            <button className="customButton" disabled={messageSending} onClick={handleSubmit} {...otherProps} >
                {messageSending ? 'Sending message...' : 'Send'}
            </button>
        </div>
    );
}

export default CustomButton;
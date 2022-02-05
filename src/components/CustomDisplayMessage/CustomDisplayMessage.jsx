import React from "react";
import './CustomDisplayMessage.styles.scss';

const CustomDisplayMessage = ({status, failedMessage, successMessage, displayMessage}) => {
    return(
        <div className={`${displayMessage ? 'displayMessage' : 'noDisplay'} customMessage mb-3`} >
            <h4>
                {(status === 'success') ? successMessage : failedMessage}
            </h4>
        </div>
    );
}

export default CustomDisplayMessage;
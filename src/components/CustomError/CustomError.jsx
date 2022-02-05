import React from "react";
import './CustomError.styles.scss';

const CustomError = ({errorMessage, errorDisplay}) => {
    return(
        <div className={`${errorDisplay ? 'displayError' : 'noError'}`}>
            <p>Oops</p>
        </div>
    );
}

export default CustomError;
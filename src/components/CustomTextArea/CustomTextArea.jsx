import React from "react";
import './CustomTextArea.styles.scss';

const CustomTextArea = ({handleChange, ...otherProps}) => {
    return (
        <div className="customTextArea">
            <textarea className="textArea" onChange={handleChange} {...otherProps}/>
        </div>
    );
}

export default CustomTextArea;
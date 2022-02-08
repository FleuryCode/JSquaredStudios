import React from "react";
import './CalendarDay.styles.scss';

const CalendarDay = ({ hasAvailable, dayNumber, isDisabled, handleClick, date }) => {
    return (
        <div className="calendarDayContainer">
            <div onClick={() => {handleClick(date)}} className={`calendarDay ${isDisabled ? 'isDisabled' : 'notDisabled'} ${hasAvailable ? 'hasAvailable' : 'notAvailable'}`}>
                {dayNumber}
            </div>
        </div>

    );
}

export default CalendarDay;
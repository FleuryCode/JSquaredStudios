import React from "react";
import './CalendarDay.styles.scss';

const CalendarDay = ({ hasAvailable, dayNumber, isDisabled }) => {
    return (
        <div className="calendarDayContainer">
            <div className={`calendarDay ${isDisabled ? 'isDisabled' : 'notDisabled'} ${hasAvailable ? 'hasAvailable' : 'notAvailable'}`}>
                {dayNumber}
            </div>
        </div>

    );
}

export default CalendarDay;
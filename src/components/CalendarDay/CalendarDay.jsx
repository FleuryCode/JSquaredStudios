import React from "react";
import './CalendarDay.styles.scss';

const CalendarDay = ({hasAvailable, dayNumber, isDisabled}) => {
    return (
        <div className={`calendarDayContainer ${isDisabled ? 'isDisabled' : 'notDisabled'} ${hasAvailable ? 'hasAvailable' : 'notAvailable'}`}>
            {dayNumber}
        </div>
    );
}

export default CalendarDay;
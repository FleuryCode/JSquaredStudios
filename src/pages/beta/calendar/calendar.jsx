import React from "react";
import './calendar.styles.scss';
import CalendarComponent from "../../../components/CalendarComponent/CalendarComponent";
import { format } from 'date-fns';

const Calendar = () => {
    const date = new Date();
    const month = format(new Date(date), "MMMM");

    return (
        <div className="calendar d-flex justify-content-center flex-column container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Calendar App Page</h1>
                </div>
                <div className="col-12 col-md-7 d-flex justify-content-center my-4 ms-4">
                <CalendarComponent date={date} month={month} />
                </div>
                <div className="col-12 col-md-4">
                    <h4>Testing</h4>
                </div>
            </div>
        </div>
    );
}

export default Calendar;
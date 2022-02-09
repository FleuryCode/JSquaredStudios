import React from "react";
import './calendar.styles.scss';
import CalendarComponent from "../../../components/CalendarComponent/CalendarComponent";
import { format } from 'date-fns';
import DropDownList from '../../../components/DropDownList/DropDownList';

const Calendar = () => {
    const date = new Date();
    const month = format(new Date(date), "MMMM");
    const serviceList = [
        'Service Name 1',
        'service Name 2',
        'Service Name 3',
        'Service Name 4'
    ]

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
                    <DropDownList serviceList = {serviceList} />
                </div>
            </div>
        </div>
    );
}

export default Calendar;
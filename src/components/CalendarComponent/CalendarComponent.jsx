import React from 'react';
import './CalendarComponent.styles.scss';
import axios from "axios";
import KEYS from "../../keys";
import CalendarDay from '../CalendarDay/CalendarDay';
import { format, addMonths, subMonths } from 'date-fns';

class CalendarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedDate: props.date,
            displayedMonth: props.month
        }
    }

    render() {

        // Grabbing Information
        // const currentDate = new Date();
        // let currentMonth = currentDate.getMonth();
        // switch (currentMonth) {
        //     case 0:
        //         currentMonth = '01';
        //         break;
        //     case 1:
        //         currentMonth = '02';
        //         break;
        //     case 2:
        //         currentMonth = '03';
        //         break;
        //     case 3:
        //         currentMonth = '04';
        //         break;
        //     case 4:
        //         currentMonth = '05';
        //         break;
        //     case 5:
        //         currentMonth = '06';
        //         break;
        //     case 6:
        //         currentMonth = '07';
        //         break;
        //     case 7:
        //         currentMonth = '08';
        //         break;
        //     case 8:
        //         currentMonth = '09';
        //         break;
        //     case 9:
        //         currentMonth = '10';
        //         break;
        //     case 10:
        //         currentMonth = '11';
        //         break;
        //     case 11:
        //         currentMonth = '12';
        //         break;
        //     default:
        //         currentMonth = '01';
        // }
        // const currentYear = currentDate.getFullYear();
        // const currentYearMonth = `${currentYear}-${currentMonth}`;

        // const calendarId = KEYS.CALENDAR_ID;
        // const apiKey = KEYS.CALENDAR_API;
        // let eventList = [];
        // const generateEventList = () => {
        //     axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`)
        //         .then(res => {
        //             console.log(`statusCode: ${res.status}`);
        //             let rawArray = res.data.items;
        //             for (let index = 0; index < rawArray.length; index++) {
        //                 if (res.data.items[index].start.dateTime.includes(currentYearMonth)) {
        //                     eventList.push(res.data.items[index]);
        //                 }

        //             }
        //             console.log(eventList);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // }

        // console.log(currentDate);
        // console.log(currentYear);
        // console.log(currentMonth);
        // console.log(currentYearMonth);

        const prevMonth = () => {
            let newDate = subMonths(new Date(this.state.displayedDate), 1);
            let newMonth = format(new Date(newDate), "MMMM");
            this.setState({
                displayedDate: newDate,
                displayedMonth: newMonth
            })
        }
        const nextMonth = () => {
            let newDate = addMonths(new Date(this.state.displayedDate), 1);
            let newMonth = format(new Date(newDate), "MMMM");
            this.setState({
                displayedDate: newDate,
                displayedMonth: newMonth
            })
        }


        const date = this.state.displayedDate;
        date.setDate(1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        const firstDayIndex = date.getDay();
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
        const nextDays = 7 - lastDayIndex - 1;

        // Displaying Days
        let days = [];

        // Creating Previous Month Days Objects
        for (let x = firstDayIndex; x > 0; x--) {
            days.push({
                dayNumber: (prevLastDay - x + 1),
                isDisabled: true,
                hasAvailable: true,
                id: (format(new Date(this.state.displayedDate), "yyyy")) + (format(subMonths(new Date(this.state.displayedDate), 1), "MM")) + (prevLastDay - x + 1)
            })
        }
        // Creating Regular Days Objects
        for (let i = 1; i <= lastDay; i++) {
            days.push({
                dayNumber: i,
                isDisabled: false,
                hasAvailable: true,
                id: (format(new Date(this.state.displayedDate), "yyyy")) + (format(new Date(this.state.displayedDate), "MM")) + (i)
            })
        }
        // Creating Next Month Days Objects
        for (let j = 1; j <= nextDays; j++) {
            days.push({
                dayNumber: j,
                isDisabled: true,
                hasAvailable: true,
                id: (format(new Date(this.state.displayedDate), "yyyy")) + (format(addMonths(new Date(this.state.displayedDate), 1), "MM")) + (j)
            })
        }

        return (
            <div className='calendarHolder container-fluid'>
                <div className="row">
                    <div className="col-12 month d-flex flex-row justify-content-center">
                        <button onClick={prevMonth} >Prev</button>
                        <h2>{this.state.displayedMonth}</h2>
                        <button onClick={nextMonth} >Next</button>
                    </div>
                    <div className="col-12 d-flex flex-row justify-content-center mt-5 px-5">
                        <div className="dayOfWeek">
                            <p>Sun</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Mon</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Tue</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Wed</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Thu</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Fri</p>
                        </div>
                        <div className="dayOfWeek">
                            <p>Sat</p>
                        </div>
                    </div>
                </div>
                {/* Start of Calendar */}
                <div className="row">
                    <div className="col-12 days px-5">
                        {days.map(day => (
                            <CalendarDay key={day.id} dayNumber={day.dayNumber} isDisabled={day.isDisabled} hasAvailable={day.hasAvailable} />
                        ))}






                    </div>
                </div>

            </div>
        );
    }
}

export default CalendarComponent;
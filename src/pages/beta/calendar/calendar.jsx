import React from "react";
import './calendar.styles.scss';
import axios, { Axios } from "axios";
import KEYS from "../../../keys";
import CalendarDay from "../../../components/CalendarDay/CalendarDay";

const Calendar = () => {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    switch (currentMonth) {
        case 0:
            currentMonth = '01';
            break;
        case 1:
            currentMonth = '02';
            break;
        case 2:
            currentMonth = '03';
            break;
        case 3:
            currentMonth = '04';
            break;
        case 4:
            currentMonth = '05';
            break;
        case 5:
            currentMonth = '06';
            break;
        case 6:
            currentMonth = '07';
            break;
        case 7:
            currentMonth = '08';
            break;
        case 8:
            currentMonth = '09';
            break;
        case 9:
            currentMonth = '10';
            break;
        case 10:
            currentMonth = '11';
            break;
        case 11:
            currentMonth = '12';
            break;
        default:
            currentMonth = '01';
    }
    const currentYear = currentDate.getFullYear();
    const currentYearMonth = `${currentYear}-${currentMonth}`;

    const calendarId = KEYS.CALENDAR_ID;
    const apiKey = KEYS.CALENDAR_API;
    let eventList = [];
    const generateEventList = () => {
        axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`)
            .then(res => {
                console.log(`statusCode: ${res.status}`);
                let rawArray = res.data.items;
                for (let index = 0; index < rawArray.length; index++) {
                    if (res.data.items[index].start.dateTime.includes(currentYearMonth)) {
                        eventList.push(res.data.items[index]);
                    }

                }
                console.log(eventList);
            })
            .catch(error => {
                console.log(error);
            })
    }

    console.log(currentDate);
    console.log(currentYear);
    console.log(currentMonth);
    console.log(currentYearMonth);

    let hasAvailable = true;
    let dayNumber = '5';
    let isDisabled = false;

    return (
        <div className="calendar d-flex justify-content-center flex-column">
            <h1>Calendar App Page</h1>
            <div className="buttonContainer mt-5">
                <button onClick={generateEventList}>Get Data</button>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <CalendarDay hasAvailable={hasAvailable} dayNumber={dayNumber} isDisabled={isDisabled} />
            </div>
        </div>
    );
}

export default Calendar;
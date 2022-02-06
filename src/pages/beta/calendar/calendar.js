import React from "react";
import './calendar.styles.scss';
import axios from "axios";
import KEYS from "../../../keys";

const Calendar = () => {

    const calendarId = KEYS.CALENDAR_ID;
    const apiKey = KEYS.CALENDAR_API;
    let eventList = [];
    const generateEventList = () => {
        axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`)
            .then(res => {
                console.log(`statusCode: ${res.status}`);
                let rawArray = res.data.items;
                


                console.log(rawArray);
                console.log(eventList);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="calendar d-flex justify-content-center flex-column">
            <h1>Calendar App Page</h1>
            <div className="buttonContainer mt-5">
                <button onClick={generateEventList}>Get Data</button>
            </div>

        </div>
    );
}

export default Calendar;
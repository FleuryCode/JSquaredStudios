const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.days');
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const monthArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];



    // Showing the Month dynamically
    document.querySelector('.date h1').innerHTML = monthArray[date.getMonth()];

    // Showing the date dynamically
    document.querySelector('.date p').innerHTML = new Date().toDateString();


    // Displaying Days
    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date dayNumber">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today dayNumber">${i}</div>`;
        } else {
            days += `<div class="dayNumber">${i}</div>`;
        }

    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date dayNumber">${j}</div>`;
    }
    monthDays.innerHTML = days;



    const dayNumber = document.getElementsByClassName('dayNumber');
    for (let k = 0; k < dayNumber.length; k++) {
        dayNumber[k].addEventListener('click', (e) => {
            let classNames = e.target.className;
            if (classNames === "prev-date dayNumber" || classNames === "next-date dayNumber") {

            } else {
                let result = dayNumber[k];
                console.log(result.innerHTML);
            }

        });
    }
}



//  Arrows
document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();


let date = new Date();

let day = date.getDate();

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayOfWeek = weekday[date.getDay()];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = date.getMonth() + 1;
let monthString = months[date.getMonth()];

let year = date.getFullYear();
let time = date.toLocaleTimeString();

let header = `${dayOfWeek}, ${day} ${monthString} ${year}`;

document.getElementById("header-date").textContent = header;

let footer = `©${year} Kaitaia Chamber of Commerce | Zach Southwick | WDD 230 Project | Last Modified: ${month}/${day}/${year} ${time}`;

document.getElementById("footer").textContent = footer;
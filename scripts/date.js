let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = date.toLocaleTimeString();

let todaysDate = `${month}/${day}/${year} ${time}`;

document.getElementById("todays-date").textContent = todaysDate;
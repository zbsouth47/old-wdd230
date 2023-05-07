let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let time = date.toLocaleTimeString();

let footer = `©${year} | Zach Southwick | Last Updated: ${month}/${day}/${year} ${time}`;

document.getElementById("footer").textContent = footer;
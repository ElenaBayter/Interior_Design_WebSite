let currantDate = new Date();
const months = [
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
  "December",
];

let day = currantDate.getDate();
let year = currantDate.getFullYear();

let monthName = months[currantDate.getMonth()];
console.log(monthName);
const dateContainer = document.querySelector(".content__date_text");
dateContainer.textContent = day + " " + monthName + "," + year;

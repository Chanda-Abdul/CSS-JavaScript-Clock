// Retrieve the DOM elements that'll be updated every second
const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

function updateTime() {
  // get the current time
  const now = new Date();

  // break it down to hours, minutes and seconds
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // calc the rotation of each clock hand in degrees
  const secondsRotationDegrees = (seconds / 60) * 360;
  const minutesRotationDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hoursRotationDegrees = (hours / 12) * 360 + (minutes / 60) * 30;

  //set clock hand rotations
  secondsHand.style.transform = `rotate(${secondsRotationDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesRotationDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursRotationDegrees}deg)`;
}

// Set the initial clock state, and update it every second
setInterval(updateTime, 1000);
updateTime();

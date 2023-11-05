/*
The time of day can be represented as the number of minutes before
or after midnight. If the number of minutes is positive, the time
is after midnight. If the number of minutes is negative, the time is
before midnight.

Write a function that takes a time using this minute-based format
and returns the time of day in 24 hour format (hh:mm). Your function
should work with any integer input.

You may not use javascript's Date class methods.
*/

function formatTo24hrTime (hours, mins) {
  let formatHours = hours < 10 ? `0${hours}` : `${hours}`;
  let formatMins = mins < 10 ? `0${mins}` : `${mins}`;

  return formatHours + ':' + formatMins;
}

function timeOfDay (totalMinutes) {
  const MINS_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

  let dailyMinutes;
  if (totalMinutes >= 0) {
    dailyMinutes = totalMinutes % MINS_PER_DAY;
  } else {
    dailyMinutes = (totalMinutes % MINS_PER_DAY) + MINS_PER_DAY;
  }

  let hours = Math.floor(dailyMinutes / MINS_PER_HOUR);
  let mins = dailyMinutes % MINS_PER_HOUR;

  return formatTo24hrTime(hours, mins);
}


// postive cases
console.log(timeOfDay(0)); // "00:00"
console.log(timeOfDay(35)); // "00:35"
console.log(timeOfDay(3000)); // "02:00"
console.log(timeOfDay(800)); // "13:20"
// negative cases
console.log(timeOfDay(-3)); // "23:57"
console.log(timeOfDay(-1437)); // "00:03"
console.log(timeOfDay(-4231)); // "01:29"
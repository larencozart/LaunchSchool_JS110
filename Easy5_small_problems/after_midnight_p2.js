/*
As seen in the previous exercise, the time of day can be represented
as the number of minutes before or after midnight. If the number of
minutes is positive, the time is after midnight. If the number of minutes
is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format,
and return the number of minutes before and after midnight, respectively.
Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.
*/
const MINS_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINS_PER_DAY = MINS_PER_HOUR * HOURS_PER_DAY;

function getHoursAndMins (formatTime) {
  return formatTime.split(':').map(elem => Number(elem));
}

function afterMidnight(formatTime) {
  let hoursAndMinsArray = getHoursAndMins(formatTime);
  let givenHours = hoursAndMinsArray[0];
  let givenMins = hoursAndMinsArray[1];

  let dailyMinutes;
  if (givenHours === HOURS_PER_DAY) {
    dailyMinutes = givenMins;
  } else {
    dailyMinutes = givenMins + (givenHours * MINS_PER_HOUR);
  }

  return dailyMinutes;
}

function beforeMidnight(formatTime) {
  let dailyMinutes = MINS_PER_DAY - afterMidnight(formatTime);

  if (dailyMinutes === MINS_PER_DAY) {
    dailyMinutes = 0;
  }

  return dailyMinutes;
}

// aftermidnight
console.log(afterMidnight("00:00") === 0); // 0
console.log(afterMidnight("12:34") === 754); // 754
console.log(afterMidnight("24:00") === 0); // 0

// beforemidnight
console.log(beforeMidnight("00:00") === 0); // 0
console.log(beforeMidnight("12:34") === 686); // 686
console.log(beforeMidnight("24:00") === 0); // 0


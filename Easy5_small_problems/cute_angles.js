/*
Write a function that takes a floating point
number representing an angle between 0 and 360
degrees and returns a string representing that
angle in degrees, minutes, and seconds. You should
use a degree symbol (˚) to represent degrees, a
single quote (') to represent minutes, and a double
quote (") to represent seconds. There are 60 minutes
in a degree, and 60 seconds in a minute.
*/

// eslint-disable-next-line max-lines-per-function
function dms (degreeFloat) {
  const MINS_IN_A_DEGREE = 60;
  const SECONDS_IN_A_MIN = 60;

  let degrees = parseInt(degreeFloat, 10);
  let degreeDecimal = degreeFloat - degrees;

  let minutesFloat = degreeDecimal * MINS_IN_A_DEGREE;
  let minutes = parseInt(minutesFloat, 10);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else if (minutes === 60) {
    minutes -= 1;
    degrees += 1;
  }
  let minutesDecimal = minutesFloat - minutes;

  let secondsFloat = minutesDecimal * SECONDS_IN_A_MIN;
  let seconds = Math.round(secondsFloat);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  } else if (seconds === 60) {
    seconds -= 1;
    minutes += 1;
  }

  return `${degrees}°${minutes}'${seconds}"`;
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
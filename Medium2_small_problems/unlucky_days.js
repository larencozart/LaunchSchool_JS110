/*
Some people believe that Fridays that fall on the 13th day
of the month are unlucky days. Write a function that takes
a year as an argument and returns the number of Friday the
13ths in that year. You may assume that the year is greater
than 1752, which is when the United Kingdom adopted the modern
Gregorian Calendar. You may also assume that the same calendar
will remain in use for the foreseeable future.
*/

function fridayThe13ths(year) {
  const FRIDAY = 5;

  let month = 1;
  let dayOfMonth = 1;
  let date = new Date(`${month} ${dayOfMonth}, ${year}`);
  let dayOfWeek = date.getDay();

  while (dayOfWeek !== FRIDAY) {
    dayOfMonth += 1;
    date = new Date(`${month} ${dayOfMonth}, ${year}`);
    dayOfWeek = date.getDay();
  }

  console.log(dayOfMonth);
  console.log(dayOfWeek);
  // get day of first day of year
  // if day = friday, check for 13 (increment if possible), add 7
  // if day != friday, add 1, check for friday, cont until a friday is found
}

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
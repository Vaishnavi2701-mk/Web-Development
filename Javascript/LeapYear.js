// Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

// This is how to work out whether if a particular year is a leap year:

// A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.

// e.g. Is the year 2000 a leap year?:

// 2000 ÷ 4 = 500 (Leap)

// 2000 ÷ 100 = 20 (Not Leap)

// 2000 ÷ 400 = 5 (Leap!)

// So the year 2000 is a leap year.

// But the year 2100 is not a leap year because:

// 2100 ÷ 4 = 525 (Leap)

// 2100 ÷ 100 = 21 (Not Leap)

// 2100 ÷ 400 = 5.25 (Not Leap)

function isLeap(year) {
  /**************Don't change the code above****************/

  //Write your code here.

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("Leap year.");
      } else {
        console.log("Not leap year.");
      }
    } else {
      console.log("Leap year.");
    }
  } else {
    console.log("Not leap year.");
  }

  /**************Don't change the code below****************/
}

isLeap(2023);
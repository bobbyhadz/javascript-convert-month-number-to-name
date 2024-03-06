// EXAMPLE 1 - Convert Month number to Month name using JavaScript

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}

console.log(getMonthName(1)); // 👉️ "January"
console.log(getMonthName(2)); // 👉️ "February"
console.log(getMonthName(3)); // 👉️ "March"

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the visitor's default locale

// function getMonthName(monthNumber) {
//   const date = new Date();
//   date.setMonth(monthNumber - 1);

//   // 👇️ using the visitor's default locale
//   return date.toLocaleString([], {
//     month: 'long',
//   });
// }

// console.log(getMonthName(1)); // 👉️ "January"
// console.log(getMonthName(2)); // 👉️ "February"
// console.log(getMonthName(3)); // 👉️ "March"

// ------------------------------------------------------------------

// // EXAMPLE 3 - Specifying different properties in the `options` object

// function getMonthName(monthNumber) {
//   const date = new Date();
//   date.setMonth(monthNumber - 1);

//   return date.toLocaleString('en-US', {
//     month: 'short',
//   });
// }

// console.log(getMonthName(1)); // 👉️ "Jan"
// console.log(getMonthName(2)); // 👉️ "Feb"
// console.log(getMonthName(3)); // 👉️ "Mar"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert Month number to Month name using Intl.DateTimeFormat

// function getMonthName(monthNumber) {
//   const date = new Date();
//   date.setMonth(monthNumber - 1);

//   const formatter = new Intl.DateTimeFormat('en-us', {
//     month: 'long',
//   });

//   return formatter.format(date);
// }

// console.log(getMonthName(1)); // 👉️ "January"
// console.log(getMonthName(2)); // 👉️ "February"
// console.log(getMonthName(3)); // 👉️ "March"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get a Month Number from a Month Name in JavaScript

// function getMonthNumberFromName(monthName) {
//   const year = new Date().getFullYear();
//   return new Date(`${monthName} 1, ${year}`).getMonth() + 1;
// }

// console.log(getMonthNumberFromName('January')); // 👉️ 1
// console.log(getMonthNumberFromName('February')); // 👉️ 2
// console.log(getMonthNumberFromName('March')); // 👉️ 3
// console.log(getMonthNumberFromName('April')); // 👉️ 4
// console.log(getMonthNumberFromName('May')); // 👉️ 5

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get a Month Number from a Month Name using an object

// const monthsShort = {
//   Jan: '01',
//   Feb: '02',
//   Mar: '03',
//   Apr: '04',
//   May: '05',
//   Jun: '06',
//   Jul: '07',
//   Aug: '08',
//   Sep: '09',
//   Oct: '10',
//   Nov: '11',
//   Dec: '12',
// };
// console.log(monthsShort['Aug']); // 👉️ 08

// const monthsLong = {
//   January: '01',
//   February: '02',
//   March: '03',
//   April: '04',
//   May: '05',
//   June: '06',
//   July: '07',
//   August: '08',
//   September: '09',
//   October: '10',
//   November: '11',
//   December: '12',
// };
// console.log(monthsLong['August']); // 👉️ 08

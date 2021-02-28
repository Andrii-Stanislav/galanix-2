const header = document.querySelector('#header');
const images = document.querySelectorAll('img');

const date = new Date();

const validDate =
  'Date - ' +
  v00(date.getDate()) +
  ':' +
  v00(date.getMonth()) +
  ':' +
  date.getFullYear() +
  ' ' +
  'Time -' +
  v00(date.getHours()) +
  ':' +
  v00(date.getMinutes());

// В даному випадку конкатенація рядків читається краще ніж шаблонний рядок.

// const validDate = `Date - ${v00(date.getDate())}:${v00(
//   date.getMonth(),
// )}:${date.getFullYear()} Time - ${v00(date.getHours())}:${v00(
//   date.getMinutes(),
// )}`;

header.textContent = `Images on page - ${images.length}. ${validDate}`;

// Функція приведення значень дати до вигляду '00'
function v00(timeNumber) {
  return `${timeNumber}`.length === 1 ? `0${timeNumber}` : timeNumber;
}

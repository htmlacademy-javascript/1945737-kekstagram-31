const checkString = (string = '', maxLength = 1) => string.length <= maxLength;

const isPolindrom = function (string = '') {
  // если в параметры не передать значение, будет ошибка от replaceAll, поэтому стоит default

  const normalString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    newString += normalString[i];
  }
  return newString === normalString;
};

// const palindrome = function (string = '') {
//   const normalString = string.replaceAll(' ', '').toLowerCase();
//   const reverseString = normalString.split('').reverse().join('');
//   return reverseString === normalString;
// };

// const palindrome = (string = '') => {
//   const normalString = string.replace(/\s+/g, '').toLowerCase();
//   return normalString === [...normalString].reverse().join('');
// };


const pullNumbers = function (string) {
  let newString = '';
  string = string.toString(); //зачем делать из строки строку?

  for (let i = 0; i <= string.length; i++) {
    const stringInNumber = parseInt(string[i], 10);
    if (!Number.isNaN(stringInNumber)) {
      newString += string[i];
    }
  }
  return newString === '' ? NaN : Number(newString);
};

// function stringToNumber(str) {
//   return Number(
//     [...str].filter((item) => !isNaN(parseInt(item, 10))).join('') || NaN
//   );
// }

// const stringToNumber = (string = '') => Math.abs(parseInt(string.replace(/\D+/g, ''), 10));


checkString('jkmuf', 5);

isPolindrom('fv df fd vfd');

pullNumbers('dfjqwd6734');

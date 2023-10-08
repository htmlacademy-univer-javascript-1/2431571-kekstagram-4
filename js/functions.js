//Функция для проверки длины строки
const compareString = (comparedString, maxLength) => comparedString.length <= maxLength;

// Cтрока короче 20 символов
compareString('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
compareString('проверяемая строка', 18); // true
// Строка длиннее 10 символов
compareString('проверяемая строка', 10); // false

//Функция для проверки, является ли строка палиндромом
const isPolindrom = (line) => {
  line = line.replaceAll(' ','').toLowerCase();
  const reverseLine = [...line].reverse().join('');
  return (line === reverseLine);
};

// Строка является палиндромом
isPolindrom('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPolindrom('ДовОд'); // true
// Это не палиндром
isPolindrom('Кекс');  // false

//Функция извлекает цифры из строки и возвращает их в виде целого положительного числа.
const findNumbers = (line) => {
  let result = '';
  line = line.toString();
  for (let i = 0; i < line.length; i++) {
    if (!isNaN(parseInt(line[i],10))) {
      result += line[i];
    }
  }
  return parseInt(result,10);
};

findNumbers('2023 год');            // 2023
findNumbers('ECMAScript 2022');     // 2022
findNumbers('1 кефир, 0.5 батона'); // 105
findNumbers('агент 007');           // 7
findNumbers('а я томат');           // NaN

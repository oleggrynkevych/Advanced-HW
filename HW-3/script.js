// Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
let num = Math.round(Math.random() * 1000);

function getMaxDigit(n){
  if(n) {
    let remainder = n % 10;
    return Math.max(remainder, getMaxDigit((n-remainder) / 10));
  } else { 
      return 0;
    }
}

// Функція, яка форматує ім'я, роблячи першу букву великою.
let firstLetter = prompt("Your name is");

function makeFirstLetter(t) {
   if(t.trim() && t.length != 0) {
    return t = t[0].toUpperCase() + t.toLowerCase().slice(1);
} else {
    alert('False. Please, try again');
}
}

// Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

let salary = 200000;
let tax = 10;
let taxMore = 1.5;

const calculateTaxes = (s, t, tm) => s - Math.round(s * (t + tm) / 100);


// Функція, яка повертає випадкове ціле число в діапазоні від N до M.

function getRandomNumber (minNum, maxNum) { 
    if (minNum < maxNum) {
    return Math.round(Math.random() * (maxNum - minNum) + minNum);
}
}

// Функція, яка рахує скільки разів певна буква повторюється в слові. 

let word = "вандал";
const countLetter = (word) => word.length - word.replace(/а/g, "").length;

// Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.

function convertCurrency(exchangeRate, result) {
  let money = prompt('Введіть суму');
  if (money.includes('$') && !isNaN(parseInt(money))) {
  result = parseInt(money) * exchangeRate;
  return result + "UAH";
  } else if (money.includes('UAH') && !isNaN(parseInt(money))) {
  result = parseInt(money) / exchangeRate;
  return result + "$";
  } else {
    return "Невірно вказане значення";  
}
  } 

  // Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

  function getRandomPassword() {
    lengthPassword = prompt('З якої кількості цифр повинен складатись Ваш пароль?');
    if (Number.isInteger(+lengthPassword)) {
    let password = Math.round(Math.random() * Math.pow(10, lengthPassword));
    return password;
    } else {
    let password = Math.round(Math.random() * Math.pow(10, 8));
    return password;
    }
    }
    
    // Функція, яка видаляє всі букви з речення. 

    const deleteLetters = (letter, text) => text.replaceAll(letter, '' );



console.log("Найбільша цифра у числі: " + num + " -> " + getMaxDigit(num));

console.log("Ім'я завжди з великої: " + makeFirstLetter(firstLetter));

console.log("Зарплатня: " + salary + ' -> ' + "Зарплатня після сплати податків: " + calculateTaxes(salary, tax, taxMore));

console.log("Випадкове число: " + getRandomNumber(50, 100));

console.log('Буква "а"' + " у слові " + '"' + word + '"' + " повторюється таку кількість разів: " + countLetter(word));

console.log("Перевести долари у гривні чи навпаки: " + convertCurrency(35));

console.log ("Ваш пароль: " + getRandomPassword());

console.log ('Видалити усі букви "а" з речення "Собака гавкає на кота": ' + deleteLetters('а', 'Cобака гавкав на кота'));

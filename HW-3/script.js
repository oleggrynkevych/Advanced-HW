// Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
const num = Math.round(Math.random() * 1000);

function getMaxDigit(n){
  if(n) {
    const remainder = n % 10;
    return Math.max(remainder, getMaxDigit((n-remainder) / 10));
  } else { 
      return 0;
    }
}

// Функція, яка форматує ім'я, роблячи першу букву великою.
const firstLetter = prompt("Your name is");

function makeFirstLetter(t) {
   if(isNaN(t) && t.length != 0) {
    return t = t[0].toUpperCase() + t.toLowerCase().slice(1);
} else {
    alert('False. Please, try again');
}
}

// Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

const SALARY = 200000;
const TAX = 10;
const TAX_MORE = 1.5;

const calculateTaxes = (s, t, tm) => s - Math.round(s * (t + tm) / 100);


// Функція, яка повертає випадкове ціле число в діапазоні від N до M.

function getRandomNumber (minNum, maxNum) { 
    if (minNum < maxNum) {
    return Math.round(Math.random() * (maxNum - minNum) + minNum);
}
}

// Функція, яка рахує скільки разів певна буква повторюється в слові. 

const WORD = "вандал";
const LTR = "а";

const countLetter = (w, l) => w.length - w.replaceAll(l, "").length;

// Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.

function convertCurrency(exchangeRate, result) {
  let money = prompt('Введіть суму');
  if (money.includes('$') && !isNaN(parseInt(money))) {
  result = parseInt(money) * exchangeRate;
  return result + "UAH";
  } else if (money.includes('UAH') || money.includes('uah') && !isNaN(parseInt(money))) {
  result = parseInt(money) / exchangeRate;
  return result + "$";
  } else {
    return "Невірно вказане значення";  
}
  } 

  // Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

  function getRandomPassword() {
    lengthPassword = prompt('З якої кількості цифр повинен складатись Ваш пароль?');
    return (Number.isInteger(+lengthPassword)) ? Math.trunc(Math.random() * Math.pow(10, lengthPassword)) : Math.trunc(Math.random() * Math.pow(10, 8));
}
    
    // Функція, яка видаляє всі букви з речення. 

    const deleteLetters = (letter, text) => text.replaceAll(letter, '' );



console.log("Найбільша цифра у числі: " + num + " -> " + getMaxDigit(num));

console.log("Ім'я завжди з великої: " + makeFirstLetter(firstLetter));

console.log("Зарплатня: " + SALARY + ' -> ' + "Зарплатня після сплати податків: " + calculateTaxes(SALARY, TAX, TAX_MORE));

console.log("Випадкове число: " + getRandomNumber(50, 100));

console.log("Буква " + LTR + " у слові " + '"' + WORD + '"' + " повторюється таку кількість разів: " + countLetter(WORD, LTR));

console.log("Перевести долари у гривні чи навпаки: " + convertCurrency(35));

console.log ("Ваш пароль: " + getRandomPassword());

console.log ('Видалити усі букви "а" з речення "Собака гавкає на кота": ' + deleteLetters('а', 'Cобака гавкав на кота'));

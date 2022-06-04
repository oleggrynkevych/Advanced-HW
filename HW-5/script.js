// Функція, яка повертає масив випадкових цілих чисел

function getRandomArray(length, min, max) {
    let randomNumbers = [];
    const randomInteger = () => Math.floor(min + Math.random() * (max + 1 - min));

    for (i = 0; i < length; i++) {
        randomNumbers.push(randomInteger());
    }
        return randomNumbers;
    }

// Функція, яка вираховує моду всіх переданих в неї аргументів

const getModa = (...numbers) => {
    const numberCounterObj = {};

    numbers.filter(i => Number.isInteger(i))
        .forEach(i => {
            let counter = numberCounterObj[i];

            !counter ? numberCounterObj[i] = 1 : numberCounterObj[i] = ++counter
        });


    const numberCounters = Object.keys(numberCounterObj).map(e => ({
        'number': e,
        'count': numberCounterObj[e]
    }));
    const maxCount = Math.max(...numberCounters.map(e => e.count));

    return numberCounters.filter(e => e.count == maxCount)
        .map(e => e.number).toString();
}

// Функція, яка рахує середнє арифметичне всіх переданих в неї аргументів

const getAvarage = (...numbers) => {
    return numbers.filter(i => Number.isInteger(i)).reduce((sum, current) => {
        return (sum + current)
    },0) / (numbers.filter(i => Number.isInteger(i))).length;
    }

// Функція, яка рахує медіану всіх переданих в неї аргументів

const getMedian = (...numbers) => {
    const newArray = numbers.filter(i => Number.isInteger(i)).sort((a, b) => a - b);
    const averageIndex = Math.floor(newArray.length / 2);

    return (newArray.length % 2 == 0) 
    ? (newArray[averageIndex] + newArray[averageIndex - 1]) / 2
    : newArray[averageIndex];
    }

// Функція, яка фільтрує парні числа передані як аргументи функції

const filterEvenNumbers = (...numbers) => numbers.filter((i) => i % 2 !== 0);

// Функція, яка порахує кількість чисел більших 0

const countPositiveNumbers = (...numbers) => (numbers.filter((i) => i>0)).length

// Функція, яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

const getDividedByFive = (...numbers) => numbers.filter((i) => i % 5 == 0);

// Функція, яка розбиває кожне слово на умовні склади по 3 букви

function divideByThree(word) {
    const renewWord = (word.replaceAll(" ", "")).toLowerCase();
    const result = []
    const letterArray = Array.from(renewWord)

    if (renewWord.length >= 3) {
        letterArray.forEach((item, index, arr) => result.push(arr.splice(index, 3, 0).join('')))
        return result
    } else {
        return alert("Слово повинне складатись зі щонайменше 3-х символів!")
    }
    };


console.log('getRandomArray(10, 30, 60) ', getRandomArray(10, 30, 60));

console.log('getModa(2, 4, 105, 105, 4.5, 7.1, 3, 4, 6) ', getModa(2, 4, 105, 105, 4.5, 7.1, 3, 4, 6));

console.log('getAvarage(2, 4, 9, 8.8, 100, 5) ', getAvarage(2, 4, 9, 8.8, 100, 5));

console.log('getMedian(1, 4, 5, 9, 10, 100)) ', getMedian(1, 4, 5, 9, 10, 100));
console.log('getMedian(1, 4, 5, 10, 100)) ', getMedian(1, 4, 5, 10, 100));

console.log('filterEvenNumbers(1, 2, 4, 5, 7, 8) ', filterEvenNumbers(1, 2, 4, 5, 7, 8));

console.log('countPositiveNumbers(1, -8, 6, 0, 112, -7, 33) ', countPositiveNumbers(1, -8, 6, 0, 112, -7, 33));

console.log('getDividedByFive(1, 105, 6, 55, 5) ', getDividedByFive(1, 105, 6, 55, 5));

console.log('Розділить слово на склади по три літери: ', divideByThree(prompt("Введіть слово")));
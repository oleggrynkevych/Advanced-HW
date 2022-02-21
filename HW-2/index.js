let numN = prompt("Вкажіть число N");

if (numN.length > 0 && !isNaN(numN) && Number.isInteger(Number(numN))) {
    numN = Number(numN);
    console.log(numN);
} else {
    alert("Ви вказали невірне число");
}

let numM = prompt("Вкажіть число M");

if (numM.length > 0 && !isNaN(numM) && Number.isInteger(Number(numM))) {
    numN = Number(numN);
    console.log(numM);
} else {
    alert("Ви вказали невірне число");
}

let question = confirm('Пропускати парні числа?');
console.log(question);

let sum = 0;

const numMin = Math.min(numN, numM);
const numMax = Math.max(numN, numM);

let a;

if (question == true) {
    for (a = numMin; a <= numMax; ++a) {
        if (a % 2 == 0) {
            continue
        }
        sum += a;
    } }
else {
    for (a = numMin; a <= numMax; ++a) {
        sum += a;
    }
}

alert(`Результат: ${sum}`);
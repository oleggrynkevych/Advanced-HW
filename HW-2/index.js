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

let sum;

if (question == true) {
    for (sum = 0; numN <= numM; ++numN) {
        if (numN % 2 == 0) {
            continue
        }
        sum += numN;
    } }
else {
    for (sum = 0; numN <= numM; ++numN) {
        sum += numN;
    }
}

alert(`Результат: ${sum}`);
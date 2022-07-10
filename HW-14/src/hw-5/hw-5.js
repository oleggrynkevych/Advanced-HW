function divideByThree() {
    let word = prompt("Введіть слово, яке поділиться на склади по три літери:");
    const renewWord = (word.replaceAll(" ", "")).toLowerCase();
    const result = [];
    const letterArray = Array.from(renewWord);

    if (renewWord.length >= 3) {
        letterArray.forEach((item, index, arr) => result.push(arr.splice(index, 3, 0).join('')))
        alert (`Результат: ${result.toString()}`);
    } else {
        return alert("Слово повинне складатись зі щонайменше 3-х символів!");
    }
};

export default divideByThree;
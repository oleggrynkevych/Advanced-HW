function makeFirstLetter(word) {
    word = prompt("Введи своє ім'я з маленької букви:");
    if(isNaN(word) && word.length != 0) {
    word = word[0].toUpperCase() + word.toLowerCase().slice(1);
    alert(`Та-дам! ${word}`)
} else {
    alert('False. Please, try again');
}
}

export default makeFirstLetter;
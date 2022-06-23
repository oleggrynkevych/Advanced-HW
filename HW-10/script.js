function play(keyValue) {
    const audio = document.getElementById(`aud${keyValue}`);

    audio.play();  
}


function keyPlay(keyValue, btn) {
    if(event.code === `Key${keyValue}`) {
        play(keyValue);

        btn.classList.add("active");

        setTimeout(() => {
            btn.classList.remove("active");
        }, 300);
    }
}

for(let el = 1; el <= 9; el++) {
    const btn = document.getElementById(`btn${el}`);
    const keyValue = btn.textContent;

    btn.addEventListener("click", function() {play(keyValue)});
    document.addEventListener("keyup", function() { keyPlay(keyValue, btn)});
}

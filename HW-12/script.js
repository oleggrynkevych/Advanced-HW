const url = "https://swapi.dev/api/";

// Завдання №1

const urlFilm = "films/2";
const responseFilm = fetch(url + urlFilm)
    .then(value => {return value.json()});

const container = document.createElement("div");

function getInfoAboutCharacters() {
    responseFilm.then(function (value) {
        container.className = "container";
        document.body.append(container);

        for (let i = 0; i < value.characters.length; i++){
            const characterResponse = fetch(value.characters[i]);

            characterResponse.then((char) => {
                const characterObj = char.json();

                characterObj.then(val => {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.innerHTML = `
                        <span id="name">Name: ${val.name}</span>
                        <span id="birth_year">Birth year: ${val.birth_year}</span>
                        <span id="gender">Gender: ${val.gender}</span>`;
                    container.append(card);
                })    
            })
        }
    })
}

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    if (container.hasChildNodes()) {
        container.innerHTML = ``;
    } else {
        containerTwo.innerHTML = ``;
        getInfoAboutCharacters();
    }
});

// Завдання №2 - №3

const urlPlanet = "planets";
const responsePlanet = fetch(url + urlPlanet)
    .then(value => {return value.json()});

const containerTwo = document.createElement("div");
containerTwo.className = "container_two";

const btnNext = document.createElement("button");
btnNext.className = "btn_next";

const btnPrevious = document.createElement("button");
btnPrevious.className = "btn_previous";

btnNext.onclick = function () {loadMoreData(this)};
btnPrevious.onclick = function () {loadMoreData(this)};

function getList(value){
    for(let i = 0; i < value.results.length; i++){
        document.body.append(containerTwo);

        const list = document.createElement("div");
        list.className = "list";
        list.innerHTML = `
            <span id="nameOfPlanet">${value.results[i].name}</span>`;
        containerTwo.append(list);

        btnNext.innerHTML = `
            <span>NEXT >>></span>`;
        containerTwo.append(btnNext);

        if (value.previous !== null) {
            btnPrevious.innerHTML = `
                <span><<< PREVIOUS</span>`;
            containerTwo.prepend(btnPrevious);
        }
    }
}

function loadMoreData (button) {
    let URL = "";

    if (button.getAttribute(`next`)) {
        URL = button.getAttribute(`next`);
    } else {
        URL = button.getAttribute(`previous`);
    }

    const response = fetch(URL)
        .then(value => {return value.json()});
                    
    response.then(function (value){
        if (value.next !== null) {
            btnNext.style.visibility = "visible";
            btnNext.setAttribute(`next`, value.next);
        } else {
            btnNext.style.visibility = "hidden";
        }

        if (value.previous !== null) {
            btnPrevious.style.visibility = "visible";
            btnPrevious.setAttribute(`previous`, value.previous);
        } else {
            btnPrevious.style.visibility = "hidden";
        }

        containerTwo.innerHTML = "";
        getList(value);
    })
}

function getInfoAboutPlanets() {
    responsePlanet.then(function(value) {
        getList(value);

        btnNext.setAttribute(`next`, value.next);  
    })
}

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {
    if (containerTwo.hasChildNodes()) {
        containerTwo.innerHTML = ``;
    } else {
        container.innerHTML = ``;
        getInfoAboutPlanets();
    }
});

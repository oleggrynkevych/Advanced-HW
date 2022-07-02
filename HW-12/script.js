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

function getInfoAboutPlanets() {
    containerTwo.className = "container_two";
    document.body.append(containerTwo);

    const btnNext = document.createElement("button");

    function getList(value){
        for(let i = 0; i < value.results.length; i++){
            const list = document.createElement("div");
            list.className = "list";
            list.innerHTML = `
                <span id="nameOfPlanet">${value.results[i].name}</span>`;
            containerTwo.append(list);


            btnNext.className = "btn_next";
            btnNext.innerHTML = `
                <span>NEXT >>></span>`;
            containerTwo.append(btnNext);
        }
    }

    responsePlanet.then(function(value) {
        getList(value);

        btnNext.setAttribute(`next`, value.next);

        if (value.next) {
            
            btnNext.addEventListener("click", () => {
                const responseNext = fetch(btnNext.getAttribute(`next`))
                    .then(value => {return value.json()});
                    
                responseNext.then(function (value){
                    if (value.next !== null) {
                        btnNext.setAttribute(`next`, value.next);
                    } else {
                        btnNext.style.visibility = "hidden";
                    }

                    containerTwo.innerHTML = "";
                    getList(value);
                })
            }) 
        }
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

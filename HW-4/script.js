const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const teams = getTeams();
const teamsWithThemes = getTeamsWithThemes();
const studentsWithMarks = getStudentsWithMarks();
const teamsWithMarks = getTeamsWithMarks();


// Розділяємо хлопців і дівчат та отримуємо масив з парами студентів

function getTeams () {
    const boys = [];
    const girls = [];
    const pairs = [];
    for (let i of students) {
        if (!i.endsWith("а")) {
        boys.push(i);
        } else {
        girls.push(i);
        }
        }
    for(let i=0; i<3; i++){
    pairs.push([`${boys[i]}` , `${girls[i]}`])
    }
    return pairs
    }

// Зіставляємо пари і теми проектів

function getTeamsWithThemes() {
    const teamsThemes = [];
    for(let i=0; i<teams.length; i++){
    teamsThemes.push([`${teams[i]}` , `${themes[i]}`])
    }
    return teamsThemes
    }

// Зіставляємо оцінки зі студентами

function getStudentsWithMarks() {
    const studentsMarks = [];
    for(let i=0; i<students.length; i++){
    studentsMarks.push([`${students[i]}` , +`${marks[i]}`])
    }
    return studentsMarks
    }

// Ставимо кожній парі випадкову оцінку за проєкт

function getTeamsWithMarks() {
    const getRandomInt = () => Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1);
    const teamsMarks = [...teamsWithThemes];
    for(let i=0; i<teamsWithThemes.length; i++){
    teamsWithThemes[i].push(getRandomInt());
    }
    return teamsMarks
    }


console.log(teams);
console.log(teamsWithThemes);
console.log(studentsWithMarks);
console.log(teamsWithMarks);

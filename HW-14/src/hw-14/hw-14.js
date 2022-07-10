import "./hw-14.css";

const container = document.createElement(`div`);
const title = document.createElement(`button`);


function createTitle (place, func) {
    title.className = `title`;
    title.innerHTML = `<span>Homework-14</span>`
    place.append(title);

    title.addEventListener(`click`, function (){
        container.className = `container`;
        root.append(container);

        for(let i = 1; i <= 12; i++) {
            const homework = document.createElement(`div`);
            homework.setAttribute(`id`, `hw-${i}`);
            homework.className = `homework`;
            homework.innerHTML = `<span>HW-${i}</span>`;
            container.append(homework);
            homework.addEventListener(`click`, func[i-1]);
        }
    },
    {"once": true})
}

export default createTitle;


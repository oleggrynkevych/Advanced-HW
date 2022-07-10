function getTeams () {
    const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
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
        pairs.push([boys[i] , girls[i]])
    }
    
    console.log(pairs);
    alert('Результат функції getTeams подивись у консолі :)');
} 

export default getTeams;
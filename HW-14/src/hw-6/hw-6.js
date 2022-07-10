
function getSubjects (student) {
    const students = [{
        name: "Tanya",
        course: 3,
        subjects: {
          math: [4, 4, 3, 4],
          algorithms: [3, 3, 3, 4, 4, 4],
          data_science: [5, 5, 3, 4]
        }
      }, {
        name: "Victor",
        course: 4,
        subjects: {
          physics: [5, 5, 5, 3],
          economics: [2, 3, 3, 3, 3, 5],
          geometry: [5, 5, 2, 3, 5]
        }
      }, {
        name: "Anton",
        course: 2,
        subjects: {
          statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
          english: [5, 3],
          cosmology: [5, 5, 5, 5]
        }
    }];

    const arraySubjects = Object.keys(students[0].subjects);
    
    const result = arraySubjects.map(i => 
      (i[0].toUpperCase()+i.toLowerCase().slice(1)).replaceAll("_", " "));

    console.log('Cписок предметів для конкретного студента: ' , result);
    alert('Результат функції getSubjects подивись у консолі :)');
}

export default getSubjects;
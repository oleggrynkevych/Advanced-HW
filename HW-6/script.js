
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
  
//   Функція, яка повертає список предметів для конкретного студента

function getSubjects (student) {
  const arraySubjects = Object.keys(student.subjects);

  return arraySubjects.map(i => 
    (i[0].toUpperCase()+i.toLowerCase().slice(1)).replaceAll("_", " "))
  }
  
console.log('Cписок предметів для конкретного студента: ' , getSubjects(students[0]));

// Функція, яка поверне середню оцінку по усім предметам для переданого студента

function getAverageMark (student) {
    let arrayMarks = [];

    Object.values(student.subjects).forEach(i => arrayMarks = arrayMarks.concat(i));

    return (arrayMarks.reduce((prev, current) => prev + current) / arrayMarks.length).toFixed(2);   
}

console.log('Середня оцінка по усім предметам для переданого студента: ' , getAverageMark(students[0]));

// Функція, яка повертає інформацію загального виду по переданому студенту. Повинна бути виведена інформація: курс, ім'я, середня оцінка

function getStudentInfo (student) {
    return {
        'name': student.name,
        course: student.course,
        averageMark: +getAverageMark(student)
    };
}

console.log('Інформація загального виду по переданому студенту: ' , getStudentInfo(students[0]));

// Функція, яка повертає імена студентів у алфавітному порядку

function getStudentsNames(arr) {
    const res = arr.map((i) => i.name).sort();

    return res;
}

console.log('Імена студентів у алфавітному порядку: ' , getStudentsNames(students));

// Функція, яка повертає найкращого студента зі списку по показнику середньої оцінки

function getBestStudent(arr) {
    
    const studentsWithAverageMarks = arr.map((i, index) => ({
        'name': i.name,
        'avarageMark': getAverageMark(arr[index])
    }));

    const maxCount = Math.max(...studentsWithAverageMarks.map(i => i.avarageMark));

    return studentsWithAverageMarks.filter(i => i.avarageMark == maxCount)
        .map(i => i.name).toString();
}


console.log('Найкращий студент зі списку по показнику середньої оцінки: ', getBestStudent(students));

// Функція, яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень

function calculateWordLetters(word) {
  let arrLetters = Array.from(word);
  const numberCounterObj = {};

  arrLetters.forEach(i => {
    let counter = numberCounterObj[i];

    !counter ? numberCounterObj[i] = 1 : numberCounterObj[i] = ++counter
  });
  
  return numberCounterObj;
};

console.log("Обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень: " , calculateWordLetters("тест"));

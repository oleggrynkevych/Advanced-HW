function getClass () {
    class Student {
        constructor(university, course, fullName) {
            this.university = university;
            this.course = course;
            this.fullName = fullName;
            this.arrayMarks = [5, 4, 4, 5];
            this.isLearning = true;
        }
    
        getAverageMark () {
            return this.isLearning ? 
            this.arrayMarks.reduce((sum, cur) => sum = sum + cur) / this.arrayMarks.length : 
            null;  
        }
    }

    const student = new Student('Університет імені Івана Франка', 6, 'Олег Гринькевич');

    console.log(`Середня оцінка студента: ` , student.getAverageMark());
    alert('Результат функції getClass подивись у консолі :)');
}

export default getClass;
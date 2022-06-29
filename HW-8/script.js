class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.arrayMarks = [5, 4, 4, 5];
        this.isLearning = true;
    }

    getInfo () {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`
    }

    get marks () {
        return this.isLearning ? this.arrayMarks : null
    }

    set marks (mark) {
        if (this.isLearning) this.arrayMarks.push(mark);
    }

    getAverageMark () {
        return this.isLearning ? 
        this.arrayMarks.reduce((sum, cur) => sum = sum + cur) / this.arrayMarks.length : 
        null;  
    }

    dismiss() {
        return this.isLearning = false;
    }

    recover() {
        return this.isLearning = true;
    }
}


const student = new Student('Університет імені Івана Франка', 6, 'Олег Гринькевич');

console.log(`this.getInfo() -> ` , student.getInfo());

console.log(`this.marks `, student.marks);

student.marks = 5;
console.log(`this.marks after this.marks = 5 `, student.marks);

console.log(`this.getAverageMark() ` , student.getAverageMark());

student.dismiss();
console.log(`this.marks after this.dismiss()` , student.marks);

student.recover();
console.log(`this.marks after this.recover()` , student.marks);


// Advanced


class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.scholarship = 1400;
        this.getScholarship();
    }

    getScholarship () {
            setInterval( () => {
            if (this.isLearning && this.getAverageMark() >= 4) {
                console.log(`Ви отримали ${this.scholarship} грн. стипендії`);
            } else {
                console.log(`Ви не отримуєте степендії`);
            }
        }, 30000)}
}


const student1 = new BudgetStudent(`Медичний університет`, 5, `Соломія Хахула`);

console.log(`this.getInfo() for BudgetStudent -> ` , student1.getInfo());

console.log(`Нижче працює метод this.getScholarship, генеруючи текст щотридцять секунд ⬇`);
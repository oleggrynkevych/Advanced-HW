const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Функція, яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн

function getMyTaxes(salary) { 
    return Number((salary * this.tax).toFixed());
};
    
// Функція, яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні

function getMiddleTaxes() {
    return Number((this.middleSalary * this.tax).toFixed());
};

// Функція, яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні

function getTotalTaxes() {
    return Number((this.middleSalary * this.tax * this.vacancies).toFixed());
};

// Функція, яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд

function getMySalary() {
    setInterval(() => {
        const result = {};

        result.salary = Number((Math.random() * (2000 - 1500) + 1500).toFixed());
        result.taxes = getMyTaxes.call(this, result.salary);
        result.profit = Number(result.salary - result.taxes);

        console.log(result);
    }, 10000)
};


console.log('Функція getMyTaxes: ' , getMyTaxes.call(ukraine, 320));

console.log('Функція getMiddleTaxes: ' , getMiddleTaxes.call(ukraine));

console.log('Функція getTotalTaxes: ' , getTotalTaxes.call(ukraine));

console.log('Функція getMySalary: ');
getMySalary.call(ukraine);


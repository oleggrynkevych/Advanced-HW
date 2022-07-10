export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

export function getTotalTaxesInUkraine () {
    const result = Number((this.middleSalary * this.tax * this.vacancies).toFixed());
    console.log(`Сума податків, які платять IT-спеціалісти в Україні: `, result);
    alert('Результат функції getTotalTaxesInUkraine подивись у консолі :)');
};
function getSumOfProducts () {
    const priceSnickers = 15.678;
    const priceMars = 123.965;
    const priceNuts = 90.2345;

    const sumNew = Math.round(Math.floor(priceSnickers) + Math.floor(priceMars) + Math.floor(priceNuts));
    console.log ("Сума батончиків без копійок: " + sumNew);
    alert('Результат функції getSumOfProducts подивись у консолі :)');
}

export default getSumOfProducts;
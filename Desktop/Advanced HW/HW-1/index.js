const priceSnickers = 15.678;
const priceMars = 123.965;
const priceNuts = 90.2345;

console.log("Ціна батончика Snikers: " + priceSnickers);
console.log("Ціна батончика Mars: " + priceMars);
console.log("Ціна батончика Nuts: " + priceNuts);

const highestPrice = Math.max(priceSnickers, priceMars, priceNuts);
console.log("Найдорожчий батончик - Mars: " + highestPrice);

const lowestPrice = Math.min(priceSnickers, priceMars, priceNuts);
console.log("Найдешевший батончик - Snikers: " + lowestPrice);

const sum = priceSnickers + priceMars + priceNuts;
console.log("Сума всіх батончиків: " + sum);

const sumNew = Math.floor(priceSnickers + priceMars + priceNuts);
console.log ("Сума батончиків без копійок: " + sumNew);

const sumNew_2 = Math.round(223/100)*100;
console.log ("Сума батончиків, заокруглена до сотень: " + sumNew_2);

const testing = sumNew_2 % 2 == 0;
console.log ("Чи є число заокругленої суми парним: " + testing);

const change = 500 - sum;
console.log ("Решта з 500 при покупці: " + change);

let avarage = sum / 3;
avarage = avarage.toFixed (2);
console.log ("Cереднє значення цін, округлене до другого знаку після коми: " + avarage);

const discount = Math.round(Math.random() * sumNew / 10);
console.log ("Випадкова знижка: " + discount);

const discountPayment = sum - (sum * discount / 100); 
console.log ("Сума до оплати після вирахування випадкової знижки: " + discountPayment.toFixed(2));

const profit = Math.round(discountPayment) - (sumNew / 2);
console.log ("Прибуток: " + profit);

const unitInfo = `
<p>Ціна батончика Snikers: ${priceSnickers}</p>
<p>Ціна батончика Mars: ${priceMars}</p>
<p>Ціна батончика Nuts: ${priceNuts}</p>
<p>Найдорожчий батончик - Mars: ${highestPrice}</p>
<p>Найдешевший батончик - Snikers: ${lowestPrice}</p>
<p>Сума всіх батончиків: ${sum}</p>
<p>Сума батончиків без копійок: ${sumNew}</p>
<p>Сума батончиків, заокруглена до сотень: ${sumNew_2}</p>
<p>Чи є число заокругленої суми парним: ${testing}</p>
<p>Решта з 500 при покупці: ${change}</p>
<p>Cереднє значення цін, округлене до другого знаку після коми: ${avarage}</p>
<p>Випадкова знижка: ${discount}</p>
<p>Сума до оплати після вирахування випадкової знижки: ${discountPayment.toFixed(2)}</p>
<p>Прибуток: ${profit}</p>`;

document.getElementById('list').innerHTML = unitInfo;
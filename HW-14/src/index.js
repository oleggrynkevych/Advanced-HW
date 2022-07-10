import "./styles/styles.css";
import createTitle from "./hw-14/hw-14.js";
import getSumOfProducts from "./hw-1/hw-1.js";
import getSumOfNumbers from "./hw-2/hw-2.js";
import makeFirstLetter from "./hw-3/hw-3.js";
import getTeams from "./hw-4/hw-4.js";
import divideByThree from "./hw-5/hw-5.js";
import getSubjects from "./hw-6/hw-6.js";
import {ukraine, getTotalTaxesInUkraine} from "./hw-7/hw-7.js";
import getClass from "./hw-8/hw-8.js";
import getRandomBlocks from "./hw-9/hw-9.js";
import getEvents from "./hw-10/hw-10.js";
import getRandomChinese from "./hw-11/hw-11.js";
import getStarWarsInfo from "./hw-12/hw-12.js";


const root = document.getElementById("root");

const functions = [
    getSumOfProducts, 
    getSumOfNumbers, 
    makeFirstLetter, 
    getTeams, 
    divideByThree, 
    getSubjects, 
    () => {getTotalTaxesInUkraine.call(ukraine)}, 
    getClass, 
    getRandomBlocks, 
    getEvents, 
    () => {
        getRandomChinese(5).then((resolve) => console.log(`Стрінга з китайських символів: ` , resolve));
        alert('Результат функції getRandomChinese подивись у консолі :)');
    },
    getStarWarsInfo
    ];

createTitle(root, functions);
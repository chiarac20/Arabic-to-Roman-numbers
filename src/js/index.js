import {fromArabicToRoman} from './logic';

const arabicNumberDom=document.getElementById('arabic-number');
const romanNumeralDom=document.getElementById('roman-numeral');
const submitFormDom=document.getElementById('submit-form');

submitFormDom.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const arabicNumber=arabicNumberDom.value;
    romanNumeralDom.innerText=fromArabicToRoman(arabicNumber);
});

import units from './units';
import decimals from './decimals';
import hundreds from './hundreds';
import thousands from './thousands';


const arabicNumberDom=document.getElementById('arabic-number');
const romanNumeralDom=document.getElementById('roman-numeral');
const submitFormDom=document.getElementById('submit-form');

submitFormDom.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    const arabicNumber=arabicNumberDom.value;
    const arabicFigures=arabicNumber.split('');
    const romanNumeral=fromArabicToRoman(arabicFigures);
    const romanNumeralStr=romanNumeral.join('');
    romanNumeralDom.innerText=romanNumeralStr;
    // arabicNumberDom.value='';
})


function fromArabicToRoman(figures) {
    if (figures.length===0) {
        return;
    }
    else if (figures.length===1) {
        return [units.toRoman(figures[0])];
    }
    else if (figures.length===2) {
        return [decimals.toRoman(figures[0]), units.toRoman(figures[1])];
    }
    else if (figures.length===3) {
        return [
            hundreds.toRoman(figures[0]),
            decimals.toRoman(figures[1]), 
            units.toRoman(figures[2])
        ];
    }
    else {
        return [
            thousands.toRoman(figures[0]),
            hundreds.toRoman(figures[1]),
            decimals.toRoman(figures[2]), 
            units.toRoman(figures[3])
        ]
    }

}
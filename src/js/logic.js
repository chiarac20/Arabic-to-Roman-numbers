import units from './units';
import decimals from './decimals';
import hundreds from './hundreds';
import thousands from './thousands';

export function fromArabicToRoman(figures) {
    if (figures.length===0) {
        return;
    }
    else if (figures.length===1) {
        return units.toRoman(figures[0]);
    }
    else if (figures.length===2) {
        return [decimals.toRoman(figures[0]), units.toRoman(figures[1])].join('');
    }
    else if (figures.length===3) {
        return [
            hundreds.toRoman(figures[0]),
            decimals.toRoman(figures[1]), 
            units.toRoman(figures[2])
        ].join('');
    }
    else {
        return [
            thousands.toRoman(figures[0]),
            hundreds.toRoman(figures[1]),
            decimals.toRoman(figures[2]), 
            units.toRoman(figures[3])
        ].join('');
    }
}

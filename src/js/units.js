function toRoman(figure) {
    let romanNumeral;
    switch (figure) {
        case '1':
            romanNumeral= 'I';
            break;
        case '2':
            romanNumeral='II';
            break;
        case '3':
            romanNumeral='III';
            break;
        case '4':
            romanNumeral='IV';
            break;
        case '5':
            romanNumeral='V';
            break;
        case '6':
            romanNumeral='VI';
            break;
        case '7':
            romanNumeral='VII';
            break;
        case '8':
            romanNumeral='VIII';
            break;
        case '9':
            romanNumeral='IX';
            break;
        default:
            romanNumeral='';
    }
    return romanNumeral;
}


export default {
    toRoman
}   
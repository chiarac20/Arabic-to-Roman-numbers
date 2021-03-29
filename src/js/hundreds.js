function toRoman (figure) {
    let romanNumeral;
    switch (figure) {
        case '1':
            romanNumeral='C';
            break;
        case '2':
            romanNumeral='CC';
            break;
        case '3':
            romanNumeral='CCC';
            break;
        case '4':
            romanNumeral='CD';
            break;
        case '5':
            romanNumeral='D';
            break;
        case '6':
            romanNumeral='DC';
            break;
        case '7':
            romanNumeral='DCC';
            break;
        case '8':
            romanNumeral='DCCC';
            break;
        case '9':
            romanNumeral='CM';
            break;
        default:
            romanNumeral='';

    }
    return romanNumeral;
}

export default {
    toRoman
}
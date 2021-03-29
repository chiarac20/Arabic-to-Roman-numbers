function toRoman (figure) {
    let romanNumeral;
    switch (figure) {
        case '1':
            romanNumeral='X';
            break;
        case '2':
            romanNumeral='XX';
            break;
        case '3':
            romanNumeral='XXX';
            break;
        case '4':
            romanNumeral='XL';
            break;
        case '5':
            romanNumeral='L';
            break;
        case '6':
            romanNumeral='LX';
            break;
        case '7':
            romanNumeral='LXX';
            break;
        case '8':
            romanNumeral='LXXX';
            break;
        case '9':
            romanNumeral='XC';
            break;
        default:
            romanNumeral='';
    }
    return romanNumeral;
}

export default {
    toRoman
}
function toRoman (figure) {
    let romanNumeral;
    switch (figure) {
        case '1':
            romanNumeral='M';
            break;
        case '2':
            romanNumeral='MM';
            break;
        case '3':
            romanNumeral='MMM';
            break;
        default:
            romanNumeral='';
    }
    return romanNumeral;
}

export default {
    toRoman
}
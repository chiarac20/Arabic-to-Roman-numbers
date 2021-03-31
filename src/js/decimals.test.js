import decimals from './decimals';

describe('decimals', () => {
    let toRoman;
    beforeEach(() => {
        toRoman = decimals.toRoman;
    });

    afterEach(() => {
        // Callback executed after every single it
    });

    beforeAll(() => {
        // Callback executed before all it into the describe
    });

    afterAll(() => {
        // Callback executed after all it into the describe
    });

    it('should translate 1', () => {
        const actualResult = toRoman('1');
        const expectedResult = 'X';
        expect(actualResult).toBe(expectedResult);
    });

    it('should translate 2', () => {
        expect(toRoman('2')).toBe('XX');
    });

    it('should translate 3', ()=>{
        expect(toRoman('3')).toBe('XXX');
    });

    it('should translate 4', ()=>{
        expect(toRoman('4')).toBe('XL');
    });

    it('should translate 5', ()=>{
        expect(toRoman('5')).toBe('L');
    });

    it('should translate 6', ()=>{
        expect(toRoman('6')).toBe('LX');
    });

    it('should translate 7', ()=>{
        expect(toRoman('7')).toBe('LXX');
    });
    
    it('should translate 8', ()=>{
        expect(toRoman('8')).toBe('LXXX');
    });

    it('should translate 9', ()=>{
        expect(toRoman('9')).toBe('XC');
    });

    it('should translate 0', ()=>{
        expect(toRoman('0')).toBe('');
    });

    it('should not translate 5', ()=>{
        expect(toRoman('5')).not.toBe('LX');
    });
});

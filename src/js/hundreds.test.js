import hundreds from './hundreds';

describe('hundreds', () => {
    let toRoman;
    beforeEach(() => {
        toRoman=hundreds.toRoman;
    });

    it('should translate 1', () => {
        expect(toRoman('1')).toBe('C');
    });

    it('should translate 2', () => {
        expect(toRoman('2')).toBe('CC');
    });

    it('should translate 3', () => {
        expect(toRoman('3')).toBe('CCC');
    });

    it('should translate 4', () => {
        expect(toRoman('4')).toBe('CD');
    });

    it('should translate 5', () => {
        expect(toRoman('5')).toBe('D');
    });

    it('should translate 6', () => {
        expect(toRoman('6')).toBe('DC');
    });

    it('should translate 7', () => {
        expect(toRoman('7')).toBe('DCC');
    });

    it('should translate 8', () => {
        expect(toRoman('8')).toBe('DCCC');
    });

    it('should translate 9', () => {
        expect(toRoman('9')).toBe('CM');
    });

    it('should translate 0', () => {
        expect(toRoman('0')).toBe('');
    });

    it('should not translate 6', () => {
        expect(toRoman('6')).not.toBe('C');
    });
})
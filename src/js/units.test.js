import units from './units';

describe('units', () => {
    let toRoman;
    beforeEach(() => {
        toRoman=units.toRoman;
    });

    it('should translate 1', () => {
        expect(toRoman('1')).toBe('I');
    });

    it('should translate 2', () => {
        expect(toRoman('2')).toBe('II');
    });

    it('should translate 3', () => {
        expect(toRoman('3')).toBe('III');
    });

    it('should translate 4', () => {
        expect(toRoman('4')).toBe('IV');
    });

    it('should translate 5', () => {
        expect(toRoman('5')).toBe('V');
    });

    it('should translate 6', () => {
        expect(toRoman('6')).toBe('VI');
    });    

    it('should translate 7', () => {
        expect(toRoman('7')).toBe('VII');
    });

    it('should translate 8', () => {
        expect(toRoman('8')).toBe('VIII');
    });

    it('should translate 9', () => {
        expect(toRoman('9')).toBe('IX');
    });

    it('should translate 0', () => {
        expect(toRoman('0')).toBe('');
    });
    
    it('should not translate 3', () => {
        expect(toRoman('3')).not.toBe('I');
    });
})
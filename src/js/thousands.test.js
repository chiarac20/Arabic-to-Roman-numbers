import thousands from './thousands';

describe('thousands', () =>{
    let toRoman;
    beforeEach(() => {
        toRoman=thousands.toRoman;
    });

    it('should translate 1', () => {
        expect(toRoman('1')).toBe('M');
    });

    it('should translate 2', () => {
        expect(toRoman('2')).toBe('MM');
    });

    it('should translate 3', () => {
        expect(toRoman('3')).toBe('MMM');
    })

    it('should translate 0', () => {
        expect(toRoman('0')).toBe('');
    });
})
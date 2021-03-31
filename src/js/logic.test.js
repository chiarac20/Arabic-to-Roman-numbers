import { fromArabicToRoman } from './logic';
import units from './units';
import decimals from './decimals';
import hundreds from './hundreds';
import thousands from './thousands';

describe('logic', () => {
    beforeEach(() => {
        jest.mock('./units');
        units.toRoman = jest.fn();
        decimals.toRoman = jest.fn();
        hundreds.toRoman = jest.fn();
        thousands.toRoman = jest.fn();
    });
    describe('check mocks are called properly', () => {
        it('should call the unit converter and pass the unit part of the number', () => {
            fromArabicToRoman('');
            expect(units.toRoman).not.toBeCalled();
            expect(decimals.toRoman).not.toBeCalled();
            expect(hundreds.toRoman).not.toBeCalled();
            expect(thousands.toRoman).not.toBeCalled();
        });
        it('should call the unit converter and pass the unit part of the number', () => {
            fromArabicToRoman('3');
            expect(units.toRoman).toBeCalledWith('3');
            expect(decimals.toRoman).not.toBeCalled();
            expect(hundreds.toRoman).not.toBeCalled();
            expect(thousands.toRoman).not.toBeCalled();
        });
        it('should call the decimal converter and pass the decimal part of the number', () => {
            fromArabicToRoman('35');
            expect(units.toRoman).toBeCalledWith('5');
            expect(decimals.toRoman).toBeCalledWith('3');
            expect(hundreds.toRoman).not.toBeCalled();
            expect(thousands.toRoman).not.toBeCalled();
        });
        it('should call the hundreds converter and pass the hundreds part of the number', () => {
            fromArabicToRoman('358');
            expect(hundreds.toRoman).toBeCalledWith('3');
        });
        it('should call the thousands converter and pass the thousands part of the number', () => {
            fromArabicToRoman('3580');
            expect(thousands.toRoman).toBeCalledWith('3');
        });
    });
    describe('check results are correct', () => {
        it('should report the same results as hundreds', () => {
            hundreds.toRoman.mockReturnValue('C');
            decimals.toRoman.mockReturnValue('XX');
            units.toRoman.mockReturnValue('III');
            expect(fromArabicToRoman('567')).toBe('CXXIII');
        });
        it('should report the same results as thousands', () => {
            thousands.toRoman.mockReturnValue('M');
            hundreds.toRoman.mockReturnValue('CC');
            decimals.toRoman.mockReturnValue('XXX');
            units.toRoman.mockReturnValue('IV');
            expect(fromArabicToRoman('4567')).toBe('MCCXXXIV');
        });
    });
});
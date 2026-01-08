import { describe, it, expect } from 'vitest';
import { add, multiply, divide } from './math';

describe('Math utilities', () => {
    describe('Add', () => {
        it('Adds two positive numbers', () => {
            const a=2;
            const b=3;

            const result=add(a, b);

            expect(result).toBe(5);
        });
        
        it('Adds two negative numbers', () => {
            expect(add(-1, -1)).toBe(-2);
        });
        
        it('Adds zero', () => {
            expect(add(1, 0)).toBe(1);
        });
    });
		describe('multiply', () => {
		    it('multiplies two numbers', () => {
		      expect(multiply(3, 4)).toBe(12);
		    });
		
		    it('returns zero when multiplied by zero', () => {
		      expect(multiply(5, 0)).toBe(0);
		    });
		  });
		
		  describe('divide', () => {
		    it('divides two numbers', () => {
		      expect(divide(10, 2)).toBe(5);
		    });
		
		    it('throws an error when dividing by zero', () => {
		      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
		    });
		  });
});

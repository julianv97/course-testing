import * as Utils from './index';
import Big from 'big.js';

/**
 * Mock para la librería Big para poder formatear en el test
 */
jest.mock('big.js', () => ({
  Big: jest.fn().mockImplementation(() => ({
    toFixed: jest.fn().mockReturnValue('1,234.56'),
    eq: jest.fn().mockReturnValue(true),
    lt: jest.fn().mockReturnValue(true),
    abs: jest.fn().mockReturnValue('1,234.56'),
  })),
}));

describe('formatCurrency', () => {
  it('should return $1,234.56 when passed 1,234.56', () => {
    expect(Utils.formatCurrency(1234.56)).toBe('$1,234.56');
  });
});

import * as Utils from './index';

describe('formatPhoneNumber', () => {
  it('should return an empty string if value is falsy', () => {
    expect(Utils.formatSSN()).toBe('');
    expect(Utils.formatSSN('')).toBe('');
    expect(Utils.formatSSN(null)).toBe('');
    expect(Utils.formatSSN(undefined)).toBe('');
  });
});

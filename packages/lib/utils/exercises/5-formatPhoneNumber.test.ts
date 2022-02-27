import * as Utils from './index';

describe('formatPhoneNumber', () => {
  it('should return "-" if phoneNumber is falsy', () => {
    expect(Utils.formatPhoneNumber()).toBe('-');
    expect(Utils.formatPhoneNumber('')).toBe('-');
    expect(Utils.formatPhoneNumber(null)).toBe('-');
    expect(Utils.formatPhoneNumber(undefined)).toBe('-');
  });

  it('should return a formatted USA phone number (format: XXX-XXX-XXXX)', () => {
    expect(Utils.formatPhoneNumber(1234567891)).toBe('123-456-7891');
    expect(Utils.formatPhoneNumber(1234567891, '-', '.')).toBe('123.456.7891');
  });

  it('should return "-" if phoneNumber is not a string or a number ', () => {
    expect(Utils.formatPhoneNumber(true as any)).toBe('-');
    expect(Utils.formatPhoneNumber(false as any)).toBe('-');
    expect(Utils.formatPhoneNumber({} as any)).toBe('-');
    expect(Utils.formatPhoneNumber([] as any)).toBe('-');
    expect(Utils.formatPhoneNumber((() => {}) as any)).toBe('-');
  });
});

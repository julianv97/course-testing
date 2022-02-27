import * as Utils from './index';

describe('getUserType', () => {
  it('returns "user" if the email is not provided', () => {
    const expected = 'user';
    const actual = Utils.getUserType();
    expect(actual).toBe(expected);
  });

  it('returns "admin" if the email ends with "@radiumrocket.com"', () => {
    const expected = 'admin';
    const actual = Utils.getUserType('julian.vicente@radiumrocket.com');
    expect(actual).toBe(expected);
  });

  it('returns "user" if the email does not end with "@radiumrocket.com"', () => {
    const expected = 'user';
    const actual = Utils.getUserType('julian.vicente@gmail.com');
    expect(actual).toBe(expected);
  });
});

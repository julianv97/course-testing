import * as Utils from './index';

describe('getFullName', () => {
  it('return an empty string if user is undefine', () => {
    const expected = '';
    const actual = Utils.getFullName();
    expect(actual).toBe(expected);
  });

  it('return last name if user only have last name', () => {
    const expected = 'Vicente';
    const actual = Utils.getFullName({firstName: '', lastName: 'Vicente'});
    expect(actual).toBe(expected);
  });

  it('return first name if user only have first name', () => {
    const expected = 'Julian';
    const actual = Utils.getFullName({firstName: 'Julian', lastName: ''});
    expect(actual).toBe(expected);
  });

  it('return an ampty string if user dont have first name or last', () => {
    const expected = '';
    const actual = Utils.getFullName({firstName: '', lastName: ''});
    expect(actual).toBe(expected);
  });

  it('return first name and last name if user have both first name and last name', () => {
    const expected = 'Julian Vicente';
    const actual = Utils.getFullName({
      firstName: 'Julian',
      lastName: 'Vicente',
    });
    expect(actual).toBe(expected);
  });
});

import * as Utils from './index';

describe('ensurePeriodAtEndOfString', () => {
  it('return the same if the input already has a .', () => {
    const input = "Hi, I'm Julián.";
    const expected = "Hi, I'm Julián.";
    const actual = Utils.ensurePeriodAtEndOfString(input);
    expect(actual).toEqual(expected);
  });

  it("should add a period to the end of the string if it doesn't already end with a period", () => {
    const input = 'Hello';
    const expected = 'Hello.';
    const actual = Utils.ensurePeriodAtEndOfString(input);
    expect(actual).toEqual(expected);
  });

  it('shoul return an empty string if the input is falsy', () => {
    const input = '';
    const expected = '';
    const actual = Utils.ensurePeriodAtEndOfString(input);
    expect(actual).toEqual(expected);
  });
});

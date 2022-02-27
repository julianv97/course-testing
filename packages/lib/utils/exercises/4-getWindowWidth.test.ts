import * as Utils from './index';

/**
 * Mock para la librería Dimensions
 */
jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn().mockReturnValue({width: 400}),
}));

describe('getWindowWidth', () => {
  it('should return 400 when the window width is 400', () => {
    const actual = Utils.getWindowWidth();
    expect(actual).toBe(400);
  });
});

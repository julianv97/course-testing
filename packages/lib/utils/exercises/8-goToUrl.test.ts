import * as Utils from './index';

/**
 * Mock para la librería Linking
 */
jest.mock('react-native', () => ({
  Linking: {
    canOpenURL: jest.fn(() => new Promise(resolve => resolve(false))),
    openURL: jest.fn(),
  },
}));

/* jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
  canOpenURL: jest.fn(() => Promise.resolve(true)),
})); */

describe('goToUrlTest', () => {
  let warnSpy = jest.spyOn(console, 'warn').mockImplementation(jest.fn());

  beforeAll(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(jest.fn());
  });

  it('should be a console.warn with the text "Empty URL"', () => {
    Utils.goToUrl('');
    expect(warnSpy).toHaveBeenCalled();
    expect(warnSpy).toHaveBeenCalledWith('Empty URL');
  });

  // canOpenURL not working
  it('should be a console.warn with the text "URL not valid"', () => {
    Utils.goToUrl('http://www.google.com');
    expect(warnSpy).toHaveBeenCalledWith('URL not valid');
  });
});

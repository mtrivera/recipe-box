const setStorage = require('../storage');
const localToObj = require('../local');

beforeEach(() => {
  // values stored in tests will also be available in other tests unless you run
  localStorage.clear();
});

describe('localStorage', () => {
  it('localStorage functions correctly', () => {
    expect(setStorage.length).toBe(1);
  });
  
  it('localStorage data should be an object when converted', () => {
    expect(typeof(localToObj(window))).toBe('object');
  });
});

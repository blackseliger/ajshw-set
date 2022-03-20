import Validator from '../js/app';

test('should', () => {
  const expected = 'gleb';
  const result = new Validator().validateUsername('gleb');
  expect(result).toEqual(expected);
});

test('should show error type if not test by RegEx', () => {
  expect(() => {
    new Validator().validateUsername('1gleb');
  }).toThrow();
});

test('should show error type if not test by RegEx', () => {
  expect(() => {
    new Validator().validateUsername('1gleb');
  }).toThrow();
});

describe('show Error', () => {
  it('error if first symbol is number', () => {
    expect(() => {
      new Validator().validateUsername('1gleb');
    }).toThrow();
  });
  it('error if first symbol is -', () => {
    expect(() => {
      new Validator().validateUsername('_gleb');
    }).toThrow();
  });
  it('error if first symbol is _', () => {
    expect(() => {
      new Validator().validateUsername('-gleb');
    }).toThrow();
  });
  it('error if last symbol is number', () => {
    expect(() => {
      new Validator().validateUsername('gleb1');
    }).toThrow();
  });
  it('error if last symbol is _', () => {
    expect(() => {
      new Validator().validateUsername('gleb_');
    }).toThrow();
  });
  it('error if last symbol is -', () => {
    expect(() => {
      new Validator().validateUsername('gleb-');
    }).toThrow();
  });
  it('error if more than 3 digits in a row', () => {
    expect(() => {
      new Validator().validateUsername('gle3333b');
    }).toThrow();
  });
});

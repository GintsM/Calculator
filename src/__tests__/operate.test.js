import operate from '../logic/operate';

describe('Math functions', () => {
  test('add the two numers', () => {
    expect(operate(3, 2, '+')).toEqual('5');
  });
  test('subtruct the two numers', () => {
    expect(operate(10, 2, '-')).toEqual('8');
  });
  test('multiply the two numers', () => {
    expect(operate(10, 2, 'x')).toEqual('20');
  });
  test('divide the two numers', () => {
    expect(operate(10, 2, '÷')).toEqual('5');
  });
  test('Modulus of the two numers', () => {
    expect(operate(10, 3, '%')).toEqual('1');
  });
});

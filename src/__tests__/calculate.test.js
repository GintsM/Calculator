import calculate from '../logic/calculate';

describe('calculate test', () => {
  const testcase = { total: null, next: null, operation: null };
  test('AC button return null', () => {
    expect(calculate(testcase, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
  test('Button 5 must return 5 in next', () => {
    const testcase = { total: null, next: null, operation: null };
    expect(calculate(testcase, '5')).toEqual({ next: '5', total: null });
  });
  test('Operate.js operator call , returns value', () => {
    const testcase = { total: '1', next: '2', operation: '+' };
    expect(calculate(testcase, '=')).toEqual({ total: '3', next: null, operation: null });
  });
  test(' test operator x result 6', () => {
    const testcase = { total: '3', next: '2', operation: 'x' };
    expect(calculate(testcase, '=')).toEqual({ total: '6', next: null, operation: null });
  });
});
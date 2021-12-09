import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';
import Calculator from '../components/Calculator';

describe('UI experience', () => {
  test('Click', () => {
    const onEvent = jest.fn();
    render(<Button value="AC" className="btn" onEvent={onEvent} />);
    fireEvent.click(screen.getByText(/AC/));
    expect(onEvent).toHaveBeenCalledTimes(1);
  });
  test('Input Should show a 0 ', () => {
    render(<Calculator />);
    expect(screen.getByTestId('hello').value).toBe('0');
  });
});

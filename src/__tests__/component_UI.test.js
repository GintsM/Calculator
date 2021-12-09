import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('UI experience', () => {
  test('Click', () => {
    const onEvent = jest.fn();
    render(<Button value="AC" className="btn" onEvent={onEvent} />)
    fireEvent.click(screen.getByText(/AC/));
    expect(onEvent).toHaveBeenCalledTimes(1);
  })
});

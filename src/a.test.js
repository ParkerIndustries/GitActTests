import { render, screen } from '@testing-library/react';
import App from './App';

test('link', () => {
  render(<App />);
  const linkElement = screen.getByText(/micka/i);
  expect(linkElement).toBeInTheDocument();
});

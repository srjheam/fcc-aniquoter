import { render, screen } from '@testing-library/react';
import App from './App';

test('renders new quote button', () => {
  render(<App />);
  const getQuoteBtn = screen.getAllByText(/new quote/i)[0];
  expect(getQuoteBtn).toBeInTheDocument();
});

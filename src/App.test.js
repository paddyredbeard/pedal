import { render, screen } from '@testing-library/react'
import App from './App'

test('renders page', () => {
  render(<App />)
  const h1Element = screen.getByText(/eat tacos, be kind, and ride your bike/i)
  const h2Element = screen.getByText(/not necessarily in that order/i)
  expect(h1Element).toBeInTheDocument()
  expect(h2Element).toBeInTheDocument()
})

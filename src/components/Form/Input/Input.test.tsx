import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('Input', () => {
  const DATA = {
    onChange: () => {},
  }

  it('renders correctly', () => {
    const { container } = render(<Input {...DATA} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Input', () => {
    render(<Input {...DATA} />)

    const input = screen.getByTestId('input')

    expect(input).toBeInTheDocument()
  })
})

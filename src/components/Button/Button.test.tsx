import { render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button', () => {
  const DATA = {
    label: '',
    onClick: () => {},
    className: '',
    disabled: false,
  }

  it('renders correctly', () => {
    const { container } = render(<Button {...DATA} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Button', () => {
    render(<Button {...DATA} />)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})

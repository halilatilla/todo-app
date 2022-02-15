import { render, screen } from '@testing-library/react'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
  const DATA = {
    onChange: () => {},
  }

  it('renders correctly', () => {
    const { container } = render(<Checkbox {...DATA} />)
    expect(container).toMatchSnapshot()
  })

  it('renders Checkbox', () => {
    render(<Checkbox {...DATA} />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toBeInTheDocument()
  })
})

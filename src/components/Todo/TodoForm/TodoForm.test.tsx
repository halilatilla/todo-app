//import { render, screen } from '@testing-library/react'
import { render, screen, fireEvent } from '../../../../test-utils'

import TodoForm from './TodoForm'

describe('TodoForm', () => {
  it('renders correctly', () => {
    const { container } = render(<TodoForm />)
    expect(container).toMatchSnapshot()
  })

  it('should adds a new to-do', () => {
    render(<TodoForm />)

    const input = screen.getByPlaceholderText('Add Todo')
    const button = screen.getByText('Add')
    const todo = 'add a new to-do'

    fireEvent.change(input, { target: { value: todo } })
    button.click()

    expect(input).toHaveValue('')
  })
})

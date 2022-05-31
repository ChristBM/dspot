import { render, screen } from '@testing-library/react'
import { Name } from './Name'

describe('<Name />', () => {
  const name = 'Jeremy Davis'
  const mode = 'list'

  beforeEach(() => {
    render(<Name mode={mode} name={name} />)
  })

  it('should render a text', () => {
    expect(screen.getByText(name)).toBeInTheDocument()
  })

  afterAll(() => {
    render(<Name mode={mode} name={name} />)
    screen.debug()
  })
})

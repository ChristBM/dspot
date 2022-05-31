import { render, screen } from '@testing-library/react'
import { Status } from './Status'

describe('<Status />', () => {
  const text = 'At work...'
  beforeEach(() => {
    render(<Status text={text} />)
  })

  it('should render a text', () => {
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  afterAll(() => {
    render(<Status text={text} />)
    screen.debug()
  })
})

import { render, screen } from '@testing-library/react'
import { Available } from './Available'

describe('<Available />', () => {
  beforeEach(() => {
    render(<Available available />)
  })

  it('should render a button', () => {
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })

  afterAll(() => {
    render(<Available available />)
    screen.debug()
  })
})

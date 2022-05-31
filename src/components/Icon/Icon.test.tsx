import { render, screen } from '@testing-library/react'
import { Icon } from './Icon'

describe('<Icon />', () => {
  const iconType = 'exit'
  beforeEach(() => {
    render(<Icon iconType={iconType} />)
  })

  it('should render an icon', () => {
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })

  afterAll(() => {
    render(<Icon iconType={iconType} />)
    screen.debug()
  })
})

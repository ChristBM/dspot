import { render, screen } from '@testing-library/react'
import { MainBtn } from './MainBtn'

describe('<MainBtn />', () => {
  const text = 'details'
  const id = 1

  beforeEach(() => {
    render(<MainBtn text={text} id={id.toString()} disable={false} />)
  })

  it('should render a button', () => {
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument()
  })

  afterAll(() => {
    render(<MainBtn text={text} id={id.toString()} disable={false} />)
    screen.debug()
  })
})

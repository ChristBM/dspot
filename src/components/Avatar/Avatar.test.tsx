import { render, screen } from '@testing-library/react'
import avatar from '@public/vercel.svg'
import { Avatar } from './Avatar'

describe('<Avatar />', () => {
  const mode = 'list'
  const img = avatar
  const alt = 'user avatar'

  it('should render an image', () => {
    render(<Avatar mode={mode} img={img} />)
    expect(screen.getByAltText(alt)).toBeInTheDocument()
  })

  afterAll(() => {
    render(<Avatar mode={mode} img={img} />)
    screen.debug()
  })
})

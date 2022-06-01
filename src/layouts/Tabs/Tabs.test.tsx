import { render, screen } from '@testing-library/react'
import { Tabs } from './Tabs'

describe('<TabLabel />', () => {
  beforeEach(() => {
    render(
      <Tabs>
        <p>Children</p>
      </Tabs>,
    )
  })

  it('should render an element p', () => {
    expect(screen.getByText(/Children/i)).toBeInTheDocument()
  })

  afterAll(() => {
    render(
      <Tabs>
        <p>Children</p>
      </Tabs>,
    )
    screen.debug()
  })
})

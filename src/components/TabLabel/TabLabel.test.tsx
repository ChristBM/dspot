import { render, screen } from '@testing-library/react'
import { TabLabel } from './TabLabel'

describe('<TabLabel />', () => {
  beforeEach(() => {
    render(
      <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
        <p>Children</p>
      </TabLabel>,
    )
  })

  it('should render a label', () => {
    expect(screen.getByLabelText(/info/i)).toBeInTheDocument()
  })

  it('should render an element p', () => {
    expect(screen.getByText(/Children/i)).toBeInTheDocument()
  })

  afterAll(() => {
    render(
      <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
        <p>Children</p>
      </TabLabel>,
    )
    screen.debug()
  })
})

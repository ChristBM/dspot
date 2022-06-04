import { render, screen } from '@testing-library/react';
import TabLabel from '.';

describe('<TabLabel />', () => {
  it('should render a label', () => {
    render(
      <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
        <p>Children</p>
      </TabLabel>,
    );
    expect(screen.getByLabelText(/info/i)).toBeInTheDocument();
  });

  it('should render an element p', () => {
    render(
      <TabLabel labelTxt="info" isDefaultChecked group="radio-group">
        <p>Children</p>
      </TabLabel>,
    );
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
  });
});

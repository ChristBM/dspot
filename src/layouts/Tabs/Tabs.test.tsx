import { render, screen } from '@testing-library/react';
import Tabs from '.';

describe('<TabLabel />', () => {
  it('should render an element p', () => {
    render(
      <Tabs>
        <p>Children</p>
      </Tabs>,
    );
    expect(screen.getByText(/Children/i)).toBeInTheDocument();
  });
});

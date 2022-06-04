import { render, screen } from '@testing-library/react';
import Available from '.';

describe('<Available />', () => {
  it('should render an icon', () => {
    render(<Available available mode="list" />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
});

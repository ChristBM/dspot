import { render, screen } from '@testing-library/react';
import Available from '.';

describe('<Available />', () => {
  it('should render a div element', () => {
    render(<Available available mode="list" />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
  it('should be available', () => {
    render(<Available available mode="list" />);
    expect(screen.getByRole('figure')).toHaveClass('is_available');
  });
  it('should not be available', () => {
    render(<Available available={false} mode="list" />);
    expect(screen.getByRole('figure')).toHaveClass('not_available');
  });
  it('should be small (list view)', () => {
    render(<Available available mode="list" />);
    expect(screen.getByRole('figure')).toHaveClass('available__list');
  });
  it('should be big (details view)', () => {
    render(<Available available mode="details" />);
    expect(screen.getByRole('figure')).toHaveClass('available__details');
  });
});

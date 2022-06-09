import { render, screen } from '@testing-library/react';
import Separator from '.';

describe('<Separator />', () => {
  it('should render an separator', () => {
    render(<Separator />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });

  it('should have some styles', () => {
    render(<Separator />);
    expect(screen.getByRole('figure')).toHaveClass('separator');
  });
});

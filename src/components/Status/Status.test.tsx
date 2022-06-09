import { render, screen } from '@testing-library/react';
import Status from '.';

describe('<Status />', () => {
  it('should render a text', () => {
    render(<Status text="At work" />);
    expect(screen.getByText(/At work/i)).toBeInTheDocument();
  });

  it('should have some styles', () => {
    render(<Status text="At work" />);
    expect(screen.getByText(/At work/i)).toHaveClass('status_txt');
  });
});

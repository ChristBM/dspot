import { render, screen } from '@testing-library/react';
import Icon from '.';

describe('<Icon />', () => {
  it('should render an icon', () => {
    render(<Icon iconType="exit" />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
  it('should render an close icon', () => {
    render(<Icon iconType="exit" />);
    expect(screen.getByRole('figure')).toHaveClass('icon_bg__exit');
  });
  it('should render an arrow back icon', () => {
    render(<Icon iconType="arrow_back" />);
    expect(screen.getByRole('figure')).toHaveClass('icon_bg__arrowback');
  });
});

import { render, screen } from '@testing-library/react';
import Gallery from '.';

describe('<Gallery />', () => {
  it('should render images', () => {
    render(<Gallery />);
    expect(screen.getAllByRole('img')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import DetailsHeader from '.';

describe('<DetailsHeader />', () => {
  it('should render a header', () => {
    render(<DetailsHeader />);
    expect(screen.getByRole('header')).toBeInTheDocument();
  });
});

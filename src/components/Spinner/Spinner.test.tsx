import { render, screen } from '@testing-library/react';
import Spinner from '.';

describe('<Spinner />', () => {
  it('should render a spinner', () => {
    render(<Spinner />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
});

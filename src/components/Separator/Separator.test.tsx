import { render, screen } from '@testing-library/react';
import Separator from '.';

describe('<Separator />', () => {
  it('should render an separator', () => {
    render(<Separator />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
});

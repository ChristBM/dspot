import { render, screen } from '@testing-library/react';
import DetailsMain from '.';

describe('<DetailsMain />', () => {
  it('should render a label text', () => {
    render(<DetailsMain />);
    expect(screen.getByLabelText(/Info/i)).toBeInTheDocument();
  });
});

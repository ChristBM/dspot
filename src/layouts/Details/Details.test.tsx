import { render, screen } from '@testing-library/react';
import Details from '.';

describe('<Details />', () => {
  it('should render a link tag', () => {
    render(<Details />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import InfoTitle from '.';

describe('<InfoTitle />', () => {
  it('should render a text', () => {
    render(<InfoTitle title="hello" />);
    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument();
  });
});

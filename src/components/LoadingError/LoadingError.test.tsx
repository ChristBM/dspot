import { render, screen } from '@testing-library/react';
import LoadingError from '.';

describe('<LoadingError />', () => {
  it('should render a text', () => {
    render(<LoadingError text="hello" />);
    expect(screen.getByRole('heading', { name: /hello/i })).toBeInTheDocument();
  });
});

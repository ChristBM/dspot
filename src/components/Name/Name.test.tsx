import { render, screen } from '@testing-library/react';
import Name from '.';

describe('<Name />', () => {
  const name = 'Jeremy Davis';
  const mode = 'list';
  it('should render a text', () => {
    render(<Name mode={mode} name={name} />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Name from '.';

describe('<Name />', () => {
  it('should render a text', () => {
    render(<Name mode="list" name="Jeremy" />);
    expect(
      screen.getByRole('heading', { name: /Jeremy/i }),
    ).toBeInTheDocument();
  });

  it('should render a small text on list mode', () => {
    render(<Name mode="list" name="Jeremy" />);
    expect(screen.getByRole('heading', { name: /Jeremy/i })).toHaveClass(
      'name_list',
    );
  });

  it('should render a big text on details mode', () => {
    render(<Name mode="details" name="Jeremy" />);
    expect(screen.getByRole('heading', { name: /Jeremy/i })).toHaveClass(
      'name_details',
    );
  });
});

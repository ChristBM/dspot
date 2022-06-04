import { render, screen } from '@testing-library/react';
import List from '.';

describe('<List />', () => {
  it('should render title', () => {
    render(<List />);
    expect(
      screen.getByRole('heading', { name: /Friends/i }),
    ).toBeInTheDocument();
  });
});

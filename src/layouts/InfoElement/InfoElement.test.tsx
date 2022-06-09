import { render, screen } from '@testing-library/react';
import InfoElement from '.';

describe('<InfoElement />', () => {
  it('should render a text', () => {
    render(<InfoElement title="Hello" text="World" />);
    expect(
      screen.getByRole('listitem', { name: /World/i }),
    ).toBeInTheDocument();
  });
  it('should render a title', () => {
    render(<InfoElement title="Hello" text="World" />);
    expect(screen.getByRole('heading', { name: /Hello/i })).toBeInTheDocument();
  });
});

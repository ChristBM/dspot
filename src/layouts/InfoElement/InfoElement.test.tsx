import { render, screen } from '@testing-library/react';
import InfoElement from '.';

describe('<InfoElement />', () => {
  it('should render a text', () => {
    render(<InfoElement title="Hello" text="World" />);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Status from '.';

describe('<Status />', () => {
  const text = 'At work...';

  it('should render a text', () => {
    render(<Status text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});

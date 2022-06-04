import { render, screen } from '@testing-library/react';
import Icon from '.';

describe('<Icon />', () => {
  const iconType = 'exit';

  it('should render an icon', () => {
    render(<Icon iconType={iconType} />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Avatar from '.';

const alt = "friend's avatar";
describe('<Avatar />', () => {
  it('should render an avatar image', () => {
    render(<Avatar img="/avatar.jpg" mode="list" />);
    expect(screen.getByAltText(alt)).toBeInTheDocument();
  });
  it('should have a background color and border radius', () => {
    render(<Avatar img="/avatar.jpg" mode="list" />);
    expect(screen.getByAltText(alt)).toHaveStyle(
      'border-radius: 4px; background-color: rgb(229, 229, 229)',
    );
  });
});

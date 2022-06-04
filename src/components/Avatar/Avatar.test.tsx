import { render, screen } from '@testing-library/react';
import avatar from '@public/vercel.svg';
import Avatar from '.';

describe('<Avatar />', () => {
  const mode = 'list';
  const alt = "friend's avatar";

  it('should render an image', () => {
    render(<Avatar mode={mode} img={avatar} />);
    expect(screen.getByAltText(alt)).toBeInTheDocument();
  });
});

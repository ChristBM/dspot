import { render, screen } from '@testing-library/react';
import useGetFriendsDetails from '@utils/hooks/useGetFriendsDetails';
import DetailsHeader from '.';

const details = {
  img: '/avatar2.jpg',
  available: true,
  name: 'Christian Boffill',
  status: 'At work',
};

jest.mock('@utils/hooks/useGetFriendsDetails');

describe('<DetailsHeader />', () => {
  useGetFriendsDetails.mockReturnValue(details);
  it('should render an Avatar', () => {
    render(<DetailsHeader />);
    const alt = "friend's avatar";
    expect(screen.getByAltText(alt)).toBeInTheDocument();
  });

  it('should render an Available icon', () => {
    render(<DetailsHeader />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });

  it('should render a Name', () => {
    render(<DetailsHeader />);
    expect(
      screen.getByRole('heading', { name: /christian/i }),
    ).toBeInTheDocument();
  });

  it('should render a Status', () => {
    render(<DetailsHeader />);
    expect(screen.getByText(/At work/i)).toBeInTheDocument();
  });
});

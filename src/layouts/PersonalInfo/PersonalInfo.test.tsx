import { render, screen } from '@testing-library/react';
import details from '@utils/mocks/details';
import useGetPersonalInfo from '@utils/hooks/useGetPersonalInfo';
import PersonalInfo from '.';

const friendsDetails = {
  friendInfo: [
    {
      title: 'Address:',
      text: details.address_1 || '',
    },
    {
      title: 'City:',
      text: details.city || '',
    },
    {
      title: 'State:',
      text: details.state || '',
    },
    {
      title: 'Zipcode:',
      text: details.zipcode || '',
    },
  ],
  friendBio: details.bio || '',
  friendPhone: details.phone || '',
};

jest.mock('@utils/hooks/useGetPersonalInfo');

describe('<PersonalInfo />', () => {
  useGetPersonalInfo.mockImplementation(() => friendsDetails);

  it('should render a Bio', () => {
    render(<PersonalInfo />);
    expect(screen.getByRole('heading', { name: /Bio/i })).toBeInTheDocument();
    expect(screen.getByText(friendsDetails.friendBio)).toBeInTheDocument();
  });

  it('should render a Phone', () => {
    render(<PersonalInfo />);
    expect(screen.getByRole('heading', { name: /Phone/i })).toBeInTheDocument();
    expect(screen.getByText(friendsDetails.friendPhone)).toBeInTheDocument();
  });

  it('should render two separators', () => {
    render(<PersonalInfo />);
    expect(screen.getAllByRole('figure')).toHaveLength(2);
  });

  it('should render five list elements', () => {
    render(<PersonalInfo />);
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
  });
});

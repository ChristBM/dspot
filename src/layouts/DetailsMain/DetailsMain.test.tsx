import { render, screen } from '@testing-library/react';
import useGalleryData from '@utils/hooks/useGalleryData';
import useGetPersonalInfo from '@utils/hooks/useGetPersonalInfo';
import details from '@utils/mocks/details';
import DetailsMain from '.';

const photos = {
  areValids: true,
  pictures: ['/gallery.jpg', '/gallery.jpg', '/gallery.jpg'],
};

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

jest.mock('@utils/hooks/useGalleryData');
jest.mock('@utils/hooks/useGetPersonalInfo');
const MockDispatch = jest.fn().mockReturnValue(true);

jest.mock('@redux/hooks', () => ({
  ...jest.requireActual('@redux/hooks'),
  useAppDispatch: jest.fn(() => MockDispatch),
}));

describe('<DetailsMain />', () => {
  useGetPersonalInfo.mockReturnValue(friendsDetails);
  useGalleryData.mockReturnValue(photos);

  it('should render a tab Info', () => {
    render(<DetailsMain />);
    expect(screen.getByLabelText(/info/i)).toBeInTheDocument();
  });

  it('should render a PersonalInfo', () => {
    render(<DetailsMain />);
    expect(screen.getByRole('heading', { name: /Bio/i })).toBeInTheDocument();
  });

  it('should render a tab Photo', () => {
    render(<DetailsMain />);
    expect(screen.getByLabelText(/photos/i)).toBeInTheDocument();
  });

  it('should render a 3 photos in Gallery', () => {
    render(<DetailsMain />);
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
});

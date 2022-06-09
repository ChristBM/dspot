import { render, screen } from '@testing-library/react';
import useHandleRoute from '@utils/hooks/useHandleRoute';
import useGetFriendsDetails from '@utils/hooks/useGetFriendsDetails';
import useGetPersonalInfo from '@utils/hooks/useGetPersonalInfo';
import useGalleryData from '@utils/hooks/useGalleryData';
import details from '@utils/mocks/details';
import Details from '.';

const friendDetails = {
  img: '/avatar2.jpg',
  available: true,
  name: 'Christian Boffill',
  status: 'At work',
};

jest.mock('@utils/hooks/useGetFriendsDetails');

const personalInfo = {
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

const MockDispatch = jest.fn().mockReturnValue(true);

jest.mock('@redux/hooks', () => ({
  ...jest.requireActual('@redux/hooks'),
  useAppDispatch: jest.fn(() => MockDispatch),
}));

const photos = {
  pictures: ['/gallery.jpg', '/gallery.jpg', '/gallery.jpg'],
};

jest.mock('@utils/hooks/useGalleryData');

jest.mock('@utils/hooks/useHandleRoute');

describe('<Details />', () => {
  useGetFriendsDetails.mockReturnValue(friendDetails);
  useGetPersonalInfo.mockImplementation(() => personalInfo);
  useGalleryData.mockImplementation(() => photos);

  describe('Loading state', () => {
    it('should not render a Spinner', () => {
      useHandleRoute.mockReturnValueOnce({
        isLoading: true,
        error: false,
      });
      render(<Details />);
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
  });

  describe('Error state', () => {
    it('should render an error message', () => {
      useHandleRoute.mockReturnValueOnce({
        isLoading: false,
        error: true,
      });
      render(<Details />);
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  describe('Should display the information', () => {
    it('should render a link tag', () => {
      useHandleRoute.mockReturnValueOnce({
        isLoading: false,
        error: false,
      });
      render(<Details />);
      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('should render a Details Header', () => {
      useHandleRoute.mockReturnValueOnce({
        isLoading: false,
        error: false,
      });
      render(<Details />);
      const alt = "friend's avatar";
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });
});

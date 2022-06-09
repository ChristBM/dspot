import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GalleryModal from '.';

const picture = '/gallery.jpg';

jest.mock('@utils/hooks/useGalleryData');

const MockClose = jest.fn().mockReturnValue(true);

jest.mock('@redux/hooks', () => ({
  ...jest.requireActual('@redux/hooks'),
  useAppSelector: jest.fn(() => picture),
  useAppDispatch: jest.fn(() => MockClose),
}));

describe('<GalleryModal />', () => {
  describe('Close button', () => {
    it('should render an icon', () => {
      render(<GalleryModal />);
      expect(screen.getByRole('figure')).toBeInTheDocument();
    });

    it('should render a close button', () => {
      render(<GalleryModal />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should be clicked once by the user', async () => {
      render(<GalleryModal />);
      await userEvent.click(screen.getByRole('button'));
      expect(MockClose).toHaveBeenCalledTimes(1);
    });
  });

  it('should render an image', () => {
    render(<GalleryModal />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

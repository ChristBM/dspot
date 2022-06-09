import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useGalleryData from '@utils/hooks/useGalleryData';
import Gallery from '.';

const photos = {
  pictures: ['/gallery.jpg', '/gallery.jpg', '/gallery.jpg'],
};

jest.mock('@utils/hooks/useGalleryData');

const MockDispatch = jest.fn().mockReturnValue(true);

jest.mock('@redux/hooks', () => ({
  ...jest.requireActual('@redux/hooks'),
  useAppDispatch: jest.fn(() => MockDispatch),
}));

describe('<Gallery />', () => {
  useGalleryData.mockImplementation(() => photos);
  it('should render images 3 images', () => {
    render(<Gallery />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3);
  });

  it('dispatch should be called twice (openModal, setPicture)', async () => {
    render(<Gallery />);
    const images = screen.getAllByRole('img');
    await userEvent.click(images[0]);
    expect(MockDispatch).toHaveBeenCalledTimes(2);
  });
});

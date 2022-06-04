import { render, screen } from '@testing-library/react';
import GalleryModal from '.';

describe('<GalleryModal />', () => {
  it('should render an icon', () => {
    render(<GalleryModal />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });
});

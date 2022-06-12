/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable object-curly-newline */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useListElementPrepare from '@utils/hooks/useListElementPrepare';
import ListElement from '.';

const props = {
  id: '1',
  img: '/avatar.jpg',
  name: 'hello',
  status: 'good',
  available: true,
};

const mockHook = {
  isAnImage: true,
  handleRoute: jest.fn().mockReturnValue(true),
};

const { id, img, name, status, available } = props;

jest.mock('@utils/hooks/useListElementPrepare');

describe('<ListElement />', () => {
  useListElementPrepare.mockImplementation(() => mockHook);

  describe('Render Components', () => {
    beforeEach(() => {
      render(<ListElement id={id} img={img} name={name} status={status} available={available} />);
    });

    it('should render an Avatar', () => {
      expect(screen.getByAltText(/friend's avatar/i)).toBeInTheDocument();
    });

    it('should render an Available', () => {
      expect(screen.getByRole('figure')).toBeInTheDocument();
      expect(screen.getByRole('figure')).toHaveClass('is_available');
    });

    it('should render a Name', () => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });

    it('should render a Status', () => {
      expect(screen.getByText(status)).toBeInTheDocument();
    });

    it('should render a MainBtn', () => {
      expect(screen.getByRole('button', { name: /Details/i })).toBeInTheDocument();
    });

    it('should click a details button', async () => {
      await userEvent.click(screen.getByRole('button', { name: /Details/i }));
      expect(mockHook.handleRoute).toHaveBeenCalledTimes(1);
    });
  });
});

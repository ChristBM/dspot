import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MainBtn from '.';

describe('<MainBtn />', () => {
  const text = 'details';
  const mockHandler = jest.fn(() => true).mockName('handleClick');

  it('should render a button', () => {
    render(<MainBtn text={text} disable={false} handleClick={mockHandler} />);
    expect(screen.getByRole('button', { name: text })).toBeInTheDocument();
  });
  describe('MainBtn enabled', () => {
    it('should have normal styles', () => {
      render(<MainBtn text={text} disable={false} handleClick={mockHandler} />);
      expect(screen.getByRole('button', { name: text })).toHaveClass(
        'main_btn',
      );
    });
    it('should not do nothing', async () => {
      mockHandler.mockReturnValue(true);
      render(<MainBtn text={text} disable={false} handleClick={mockHandler} />);
      await userEvent.click(screen.getByRole('button', { name: text }));
      expect(mockHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('MainBtn disabled', () => {
    it('should have disabled styles', () => {
      render(<MainBtn text={text} disable handleClick={mockHandler} />);
      expect(screen.getByRole('button', { name: text })).toHaveClass(
        'main_btn__disable',
      );
    });
    it('should not do nothing', async () => {
      mockHandler.mockReturnValue(true);
      render(<MainBtn text={text} disable handleClick={mockHandler} />);
      await userEvent.click(screen.getByRole('button', { name: text }));
      expect(mockHandler).toHaveBeenCalledTimes(0);
    });
  });
});

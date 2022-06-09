import { render, screen } from '@testing-library/react';
import { useGetFriendsQuery } from '@redux/apis/friends';
import friends from '@utils/mocks/friends';

import List from '.';

jest.mock('@redux/apis/friends');

describe('<List />', () => {
  describe('Loading state', () => {
    beforeEach(() => {
      useGetFriendsQuery.mockImplementation(() => ({
        data: friends,
        isLoading: true,
        error: false,
      }));
    });

    it('should not render a Spinner', () => {
      render(<List />);
      expect(screen.getByRole('figure')).toBeInTheDocument();
    });

    it('should not render a List', () => {
      render(<List />);
      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
  });

  describe('Error state', () => {
    beforeEach(() => {
      useGetFriendsQuery.mockImplementation(() => ({
        data: friends,
        isLoading: false,
        error: true,
      }));
    });

    it('should not render a List', () => {
      render(<List />);
      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });

    it('should render an error message', () => {
      render(<List />);
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });

  describe('Should display the information', () => {
    beforeEach(() => {
      useGetFriendsQuery.mockImplementation(() => ({
        data: friends,
        isLoading: false,
        error: false,
      }));
    });

    it('should render title', () => {
      render(<List />);
      expect(screen.getByRole('heading', { name: /Friends/i })).toBeInTheDocument();
    });

    it('should render 6 List Elements', () => {
      render(<List />);
      expect(screen.getAllByRole('listitem')).toHaveLength(6);
    });
  });
});

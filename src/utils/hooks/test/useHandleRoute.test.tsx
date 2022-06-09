import { renderHook } from '@testing-library/react-hooks';
import { useGetDetailsQuery } from '@redux/apis/friends';
import useHandleRoute from '../useHandleRoute';

jest.mock('@redux/apis/friends');

const router = {
  query: jest.fn().mockReturnValue('id'),
};

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => router),
}));

describe('useHandleRoute hook', () => {
  useGetDetailsQuery.mockImplementation(() => ({ isLoading: true, error: false }));

  it('should render correctly', () => {
    const { result } = renderHook(() => useHandleRoute());
    const res = result.current;

    expect(res).toBeDefined();
  });

  it('should return isLoading and error', () => {
    const { result } = renderHook(() => useHandleRoute());
    const res = result.current;

    expect(res.isLoading).toBeTruthy();
    expect(res.error).toBeFalsy();
  });

  it('should call useGetDetailsQuery once', () => {
    renderHook(() => useHandleRoute());

    expect(useGetDetailsQuery).toHaveBeenCalledTimes(1);
  });
});

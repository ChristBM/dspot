import { renderHook, act } from '@testing-library/react-hooks';
import useImgValidator from '../useImgValidator';
import details from '../../mocks/details';
import useListElementPrepare from '../useListElementPrepare';

jest.mock('@redux/apis/friends');
jest.mock('../useImgValidator');

const { img, id } = details;

const router = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => router),
}));

describe('useListElementPrepare hook', () => {
  useImgValidator.mockImplementation(() => true);

  it('should render correctly', () => {
    const { result } = renderHook(() => useListElementPrepare(img, id.toString()));
    const res = result.current;

    expect(res).toBeDefined();
  });

  it('should return img, available, name and status', () => {
    const { result } = renderHook(() => useListElementPrepare(img, id.toString()));
    const res = result.current;

    expect(res.isAnImage).toBeTruthy();
  });

  it('should call handleRoute once', () => {
    const { result } = renderHook(() => useListElementPrepare(img, id.toString()));
    const res = result.current;
    act(() => {
      res.handleRoute();
    });

    expect(router.push).toHaveBeenCalledTimes(1);
  });

  it('should call useImgValidator once', () => {
    renderHook(() => useListElementPrepare(img, id.toString()));
    expect(useImgValidator).toHaveBeenCalledTimes(1);
  });
});

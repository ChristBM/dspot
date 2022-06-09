import { renderHook } from '@testing-library/react-hooks';
import { useGetDetailsQuery } from '@redux/apis/friends';
import useImgArrayValidator from '../useImgArrayValidator';
import details from '../../mocks/details';
import useGalleryData from '../useGalleryData';

jest.mock('@redux/apis/friends');
jest.mock('../useImgArrayValidator');

const router = {
  query: jest.fn().mockReturnValue('id'),
};

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => router),
}));

describe('useGalleryData hook', () => {
  useGetDetailsQuery.mockImplementation(() => ({ data: details }));
  useImgArrayValidator.mockImplementation(() => details.photos);

  it('should render correctly', () => {
    const { result } = renderHook(() => useGalleryData());
    const res = result.current;

    expect(res).toBeDefined();
  });

  it('should return pictures[]', () => {
    const { result } = renderHook(() => useGalleryData());
    const res = result.current;

    expect(res.pictures[0]).toBe(details.photos[0]);
  });

  it('should call useGetDetailsQuery and useImgArrayValidator once', () => {
    renderHook(() => useGalleryData());

    expect(useGetDetailsQuery).toHaveBeenCalledTimes(1);
    expect(useImgArrayValidator).toHaveBeenCalledTimes(1);
  });
});

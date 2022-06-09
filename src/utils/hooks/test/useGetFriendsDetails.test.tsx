import { renderHook } from '@testing-library/react-hooks';
import { useGetDetailsQuery } from '@redux/apis/friends';
import useImgValidator from '../useImgValidator';
import details from '../../mocks/details';
import useGetFriendsDetails from '../useGetFriendsDetails';

jest.mock('@redux/apis/friends');
jest.mock('../useImgValidator');

const router = {
  query: jest.fn().mockReturnValue('id'),
};

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => router),
}));

describe('useGetFriendsDetails hook', () => {
  useGetDetailsQuery.mockImplementation(() => ({ data: details }));
  useImgValidator.mockImplementation(() => true);

  it('should render correctly', () => {
    const { result } = renderHook(() => useGetFriendsDetails());
    const res = result.current;

    expect(res).toBeDefined();
  });

  it('should return img, available, name and status', () => {
    const { result } = renderHook(() => useGetFriendsDetails());
    const res = result.current;

    expect(res.img).toBe(details.img);
    expect(res.available).toBe(details.available);
    expect(res.name).toBe(`${details.first_name} ${details.last_name}`);
    expect(res.status).toBe(details.statuses[0]);
  });

  it('should call useGetDetailsQuery and useImgValidator once', () => {
    renderHook(() => useGetFriendsDetails());

    expect(useGetDetailsQuery).toHaveBeenCalledTimes(1);
    expect(useImgValidator).toHaveBeenCalledTimes(1);
  });
});

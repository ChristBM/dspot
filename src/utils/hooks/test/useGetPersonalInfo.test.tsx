import { renderHook } from '@testing-library/react-hooks';
import { useGetDetailsQuery } from '@redux/apis/friends';
import details from '../../mocks/details';
import useGetPersonalInfo from '../useGetPersonalInfo';

jest.mock('@redux/apis/friends');

const router = {
  query: jest.fn().mockReturnValue('id'),
};

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(() => router),
}));

describe('useGetPersonalInfo hook', () => {
  useGetDetailsQuery.mockImplementation(() => ({ data: details }));

  it('should render correctly', () => {
    const { result } = renderHook(() => useGetPersonalInfo());
    const res = result.current;

    expect(res).toBeDefined();
  });

  it('should return friendInfo, friendBio and friendPhone', () => {
    const { result } = renderHook(() => useGetPersonalInfo());
    const res = result.current;

    expect(res.friendBio).toBe(details.bio);
    expect(res.friendPhone).toBe(details.phone);
    expect(res.friendInfo[0].title).toMatch(/address/i);
  });

  it('should call useGetDetailsQuery once', () => {
    renderHook(() => useGetPersonalInfo());

    expect(useGetDetailsQuery).toHaveBeenCalledTimes(1);
  });
});

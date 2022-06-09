import { renderHook } from '@testing-library/react-hooks';
import { validateImage } from 'image-validator';
import useImgValidator from '../useImgValidator';

jest.mock('image-validator');

describe('useImgValidator hook', () => {
  validateImage.mockImplementation(() => Promise.resolve(true));

  it('should render correctly', () => {
    const { result } = renderHook(() => useImgValidator('/avatar.jpg'));
    const res = result.current;
    console.log(result, res);

    expect(res).toBeDefined();
  });

  it('should call useImgValidator once', () => {
    renderHook(() => useImgValidator('/avatar.jpg'));

    expect(validateImage).toHaveBeenCalledTimes(1);
  });
});

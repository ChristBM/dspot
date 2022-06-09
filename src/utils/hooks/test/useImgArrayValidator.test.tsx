import { renderHook } from '@testing-library/react-hooks';
import { validateImage } from 'image-validator';
import useImgArrayValidator from '../useImgArrayValidator';

jest.mock('image-validator');

describe('useImgArrayValidator hook', () => {
  validateImage.mockImplementation(() => Promise.resolve(true));

  it('should render correctly', () => {
    const { result } = renderHook(() => useImgArrayValidator(['', '']));
    const res = result.current;

    expect(res).toBeDefined();
  });

  it('should call validateImage once', () => {
    renderHook(() => useImgArrayValidator(['/avatar.jpg', '', '']));

    expect(validateImage).toHaveBeenCalledTimes(3);
  });
});

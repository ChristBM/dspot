import { validateImage } from 'image-validator';

export default function useImgValidator(urlImg: string) {
  const validation = async (image: string): Promise<boolean> => {
    try {
      const res = await validateImage(image);
      return res || false;
    } catch (err) {
      return false;
    }
  };

  let isImg = false;

  validation(urlImg).then((res) => {
    isImg = res;
  });

  return isImg;
}

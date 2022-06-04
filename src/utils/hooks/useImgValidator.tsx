import { validateImage } from 'image-validator';
import { useEffect, useState } from 'react';

export default function useImgValidator(urlImg: string) {
  const [isImg, setIsImg] = useState(false);

  const validation = async (image: string): Promise<boolean> => {
    try {
      const res = await validateImage(image);
      return res || false;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    validation(urlImg)
      .then((res) => setIsImg(res as boolean))
      .catch(() => setIsImg(false));
  }, [urlImg]);

  return isImg;
}

import { useEffect, useState } from 'react';
import { validateImage } from 'image-validator';

export default function useImgArrayValidator(photos: string[]) {
  const [arrImg, setArrImg] = useState<string[]>([]);

  const validation = async (image: string): Promise<boolean> => {
    try {
      const res = await validateImage(image);
      return res || false;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const pics: string[] = [];
    photos.forEach((pic) => {
      validation(pic as string).then((res) => {
        if (res) {
          pics.concat(pic);
        }
      });
    });
    setArrImg(pics);
  }, [photos]);

  return arrImg;
}

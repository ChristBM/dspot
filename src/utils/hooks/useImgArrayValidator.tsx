import { validateImage } from 'image-validator';

export default function useImgArrayValidator(photos: string[]) {
  const validation = async (image: string): Promise<boolean> => {
    try {
      const res = await validateImage(image);
      return res || false;
    } catch (err) {
      return false;
    }
  };

  const arrImg: string[] = [];

  photos.forEach((pic) => {
    validation(pic as string).then((res) => {
      if (res) {
        arrImg.push(pic);
      }
    });
  });

  return arrImg;
}

import { NextRouter, useRouter } from 'next/router';
import { useGetDetailsQuery } from '@redux/apis/friends';
import useImgArrayValidator from './useImgArrayValidator';

const defaultPics = ['/gallery.jpg', '/gallery.jpg', '/gallery.jpg'];

export default function useGalleryData() {
  const router: NextRouter = useRouter();

  const { data } = useGetDetailsQuery(router.query.id ? 'id' : 'id');

  const validPhotos = useImgArrayValidator(typeof data === 'undefined' ? [] : data.photos);

  if (typeof data === 'undefined') {
    return { pictures: defaultPics };
  }

  const pics = validPhotos.length < 9 ? validPhotos : validPhotos.slice(0, 9);

  const pictures = pics.length > 0 ? pics : data.photos.map(() => '/gallery.jpg');

  return { pictures };
}

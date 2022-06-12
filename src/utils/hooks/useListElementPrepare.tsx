import { NextRouter, useRouter } from 'next/router';
import useImgValidator from './useImgValidator';

export default function useListElementPrepare(img: string, id: string) {
  const router: NextRouter = useRouter();

  const isAnImage = useImgValidator(img);

  const handleRoute = () => router.push(`/friend/${id}`);

  return { isAnImage, handleRoute };
}

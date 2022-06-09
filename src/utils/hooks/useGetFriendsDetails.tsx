import { NextRouter, useRouter } from 'next/router';
import { useGetDetailsQuery } from '@redux/apis/friends';
import useImgValidator from './useImgValidator';

export default function useGetFriendsDetails() {
  const router: NextRouter = useRouter();

  const { data } = useGetDetailsQuery(router.query?.id ? 'id' : 'id');

  const isAnImage = useImgValidator(typeof data === 'undefined' ? '' : data.img);

  if (typeof data === 'undefined') {
    return {
      img: '/avatar2.jpg',
      available: false,
      name: 'unknow',
      status: 'unknow',
    };
  }

  const friendData = {
    img: isAnImage ? data.img : '/avatar2.jpg',
    available: data.available,
    name: `${data.first_name} ${data.last_name}`,
    status: data.statuses[0].length > 0 ? data.statuses[0] : 'unknown',
  };

  const { img, available, name, status } = friendData;

  return { img, available, name, status };
}

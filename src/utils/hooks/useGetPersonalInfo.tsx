import { NextRouter, useRouter } from 'next/router';
import { useGetDetailsQuery } from '@redux/apis/friends';

export default function useGetPersonalInfo() {
  const router: NextRouter = useRouter();

  const { data } = useGetDetailsQuery(router.query.id ? 'id' : 'id');

  if (typeof data === 'undefined') {
    return {
      friendInfo: [
        {
          title: 'Address:',
          text: 'unknow',
        },
        {
          title: 'City:',
          text: 'unknow',
        },
        {
          title: 'State:',
          text: 'unknow',
        },
        {
          title: 'Zipcode:',
          text: 'unknow',
        },
      ],
      friendBio: 'unknow',
      friendPhone: 'unknow',
    };
  }

  const { bio, phone, address_1: address, city, state, zipcode } = data;

  const friendInfo = [
    {
      title: 'Address:',
      text: address,
    },
    {
      title: 'City:',
      text: city,
    },
    {
      title: 'State:',
      text: state,
    },
    {
      title: 'Zipcode:',
      text: zipcode,
    },
  ];

  const friendBio = bio;

  const friendPhone = phone;

  return { friendInfo, friendBio, friendPhone };
}

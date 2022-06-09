import { NextRouter, useRouter } from 'next/router';
import { useGetDetailsQuery } from '@redux/apis/friends';

export default function useHandleRoute() {
  const router: NextRouter = useRouter();

  const { isLoading, error } = useGetDetailsQuery(router.query?.id ? 'id' : 'id');

  return { isLoading, error };
}

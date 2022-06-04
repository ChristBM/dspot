import { useRouter } from 'next/router';
import Link from 'next/link';
import { useGetDetailsQuery } from '@redux/apis/friends';
import DetailsHeader from '@layouts/DetailsHeader';
import DetailsMain from '@layouts/DetailsMain';
import Icon from '@components/Icon';
import LoadingError from '@components/LoadingError';
import Spinner from '@components/Spinner';

import styles from './Details.module.css';

export default function Details() {
  const router = useRouter();
  const { isLoading, error } = useGetDetailsQuery(
    router.query?.id ? 'id' : 'id',
  );

  return (
    <section className={styles.container}>
      <Link href="/">
        <a className={styles.arrow_back}>
          <Icon iconType="arrow_back" />
        </a>
      </Link>

      <article className={styles.details}>
        {isLoading && <Spinner />}
        {error && <LoadingError text="Oops... Connection Error!" />}
        {!isLoading && !error ? (
          <>
            <DetailsHeader />
            <DetailsMain />
          </>
        ) : null}
      </article>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import useHandleRoute from '@utils/hooks/useHandleRoute';
import DetailsHeader from '@layouts/DetailsHeader';
import DetailsMain from '@layouts/DetailsMain';
import Icon from '@components/Icon';
import LoadingError from '@components/LoadingError';
import Spinner from '@components/Spinner';

import styles from './Details.module.css';

function Details() {
  const { isLoading, error } = useHandleRoute();

  return (
    <section className={styles.container}>
      <Link href="/">
        <a className={styles.arrow_back}>
          <Icon iconType="arrow_back" />
        </a>
      </Link>

      <div className={styles.details}>
        {isLoading && <Spinner />}
        {error && <LoadingError text="Oops... Connection Error!" />}
        {!isLoading && !error ? (
          <>
            <DetailsHeader />
            <DetailsMain />
          </>
        ) : null}
      </div>
    </section>
  );
}

export default React.memo(Details);

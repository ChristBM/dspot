import { NextPage } from 'next';
import Head from 'next/head';
import { useAppSelector } from '@redux/hooks';
import Details from '@layouts/Details';
import GalleryModal from '@layouts/GalleryModal';

import styles from '@styles/Friend.module.css';

const Friend: NextPage = () => {
  const isOpen = useAppSelector((state) => state.modal.isOpen);

  return (
    <div className={`${styles.friend} ${isOpen ? styles.friend_viewport : ''}`}>
      <Head>
        <title>Friend&apos;s Details</title>
        <meta name="description" content="Friend's Details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Details />

      {isOpen ? <GalleryModal /> : null}
    </div>
  );
};

export default Friend;

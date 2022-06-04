import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAppDispatch } from '@redux/hooks';
import useImgArrayValidator from '@utils/hooks/useImgArrayValidator';
import { openModal, setPicture } from '@redux/slices/modal';
import { FriendsDetails } from '@utils/interfaces/FriendsDetails';
import { useGetDetailsQuery } from '@redux/apis/friends';

import gallery from '@public/gallery.jpg';
import modal from '@public/modal.jpg';

import styles from './Gallery.module.css';

export default function Gallery() {
  const router = useRouter();
  const { data } = useGetDetailsQuery(router.query?.id ? 'id' : 'id');
  const dispatch = useAppDispatch();

  const { photos } = data as FriendsDetails;
  const galleryPhotos = photos.length < 9 ? photos : photos.slice(0, 9);
  const photosArr = useImgArrayValidator(galleryPhotos);
  const pictures = photosArr.length
    ? photosArr
    : galleryPhotos.map(() => gallery);

  return (
    <section className={styles.gallery}>
      {pictures.map((photo) => (
        <Image
          key={Math.random().toString(36).slice(0, 6)}
          src={photo}
          alt="photo"
          layout="fixed"
          loading="lazy"
          style={{
            borderRadius: '4px',
            cursor: 'zoom-in',
            backgroundColor: '#E5E5E5',
          }}
          onClick={() => {
            dispatch(setPicture(photosArr.length ? photo : modal));
            dispatch(openModal());
          }}
        />
      ))}
    </section>
  );
}

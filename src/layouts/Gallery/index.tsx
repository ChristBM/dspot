import Image from 'next/image';
import { useAppDispatch } from '@redux/hooks';
import { openModal, setPicture } from '@redux/slices/modal';
import useGalleryData from '@utils/hooks/useGalleryData';

import styles from './Gallery.module.css';

export default function Gallery() {
  const dispatch = useAppDispatch();
  const { pictures } = useGalleryData();

  return (
    <section className={styles.gallery}>
      {pictures.map((photo) => (
        <Image
          key={Math.random().toString(36).slice(0, 6)}
          src={photo}
          alt="photo"
          width={136}
          height={136}
          layout="fixed"
          loading="lazy"
          style={{
            borderRadius: '4px',
            cursor: 'zoom-in',
            backgroundColor: '#E5E5E5',
          }}
          onClick={() => {
            dispatch(setPicture(photo === '/gallery.jpg' ? '/modal.jpg' : photo));
            dispatch(openModal());
          }}
        />
      ))}
    </section>
  );
}

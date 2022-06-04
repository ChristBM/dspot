import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { closeModal } from '@redux/slices/modal';
import Icon from '@components/Icon';

import modal from '@public/modal.jpg';
import styles from './GalleryModal.module.css';

export default function GalleryModal() {
  const { isOpen, picture } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <section
      className={`${styles.modal} ${isOpen ? '' : styles.modal__closed}`}
    >
      <div className={styles.modal_cont}>
        <button
          type="button"
          className={styles.modal_close_icon}
          onClick={() => dispatch(closeModal())}
        >
          <Icon iconType="exit" />
        </button>

        <div className={styles.img_cont}>
          <Image
            src={picture || modal}
            alt="picture"
            loading="lazy"
            style={{ borderRadius: '4px', backgroundColor: '#B1B9DB' }}
          />
        </div>
      </div>
    </section>
  );
}

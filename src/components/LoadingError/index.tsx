import Image from 'next/image';
import loadingE from '@public/loading_error.svg';

import styles from './LoadingError.module.css';

type Props = {
  text: string;
};

export default function LoadingError({ text }: Props) {
  return (
    <div className={styles.loading_error}>
      <h2 className={styles.loading_error__title}>{text}</h2>
      <Image
        src={loadingE}
        alt="loading error image"
        width={200}
        height={200}
      />
    </div>
  );
}

import Image from 'next/image';

import styles from './LoadingError.module.css';

type Props = {
  text: string;
};

export default function LoadingError({ text }: Props) {
  return (
    <div className={styles.loading_error}>
      <h2 className={styles.loading_error__title}>{text}</h2>
      <Image
        src="/loading_error.svg"
        alt="loading error image"
        width={200}
        height={200}
      />
    </div>
  );
}

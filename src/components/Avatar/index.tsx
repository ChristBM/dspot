import Image, { StaticImageData } from 'next/image';
import styles from '@components/Avatar/Avatar.module.css';

type Props = {
  mode: 'list' | 'details';
  img: string | StaticImageData;
};

export default function Avatar({ img, mode }: Props) {
  return (
    <div className={styles.img}>
      <Image
        src={img}
        alt="friend's avatar"
        loading="lazy"
        width={`${mode === 'list' ? 60 : 150}`}
        height={`${mode === 'list' ? 60 : 150}`}
        style={{ borderRadius: '4px', backgroundColor: '#E5E5E5' }}
      />
    </div>
  );
}

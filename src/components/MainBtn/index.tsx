import { useRouter } from 'next/router';

import styles from './MainBtn.module.css';

type Props = {
  text: string;
  id: string;
  disable: boolean;
};

export default function MainBtn({ text, id, disable }: Props) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={`${disable ? styles.main_btn__disable : styles.main_btn}`}
      onClick={() => router.push(`${disable ? '/' : `/friend/${id}`}`)}
    >
      {text}
    </button>
  );
}

import styles from './Available.module.css';

type Props = {
  available: boolean;
  mode: 'list' | 'details';
};

export default function Available({ available, mode }: Props) {
  return (
    <div
      role="figure"
      className={`${styles.available_circle}
        ${available ? styles.is_available : styles.not_available}
        ${mode === 'list' ? styles.available__list : ''}
        ${mode === 'details' ? styles.available__details : ''}
        `}
    />
  );
}

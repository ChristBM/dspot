import styles from './Name.module.css';

type Props = {
  mode: 'list' | 'details';
  name: string;
};

export default function Name({ name, mode }: Props) {
  return (
    <h3
      className={`${styles.name}
        ${mode === 'list' ? styles.name_list : ''}
        ${mode === 'details' ? styles.name_details : ''}
      `}
    >
      {name}
    </h3>
  );
}

import styles from './Status.module.css';

type Props = {
  text: string;
};

export default function Status({ text }: Props) {
  return (
    <div className={styles.status_cont}>
      <p className={styles.status_txt}>{text}</p>
    </div>
  );
}

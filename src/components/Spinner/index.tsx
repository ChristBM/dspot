import styles from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={styles.spinner_cont}>
      <div className={styles.spinner} role="figure">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

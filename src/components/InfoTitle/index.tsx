import styles from './InfoTitle.module.css';

type Props = {
  title: string;
};

export default function InfoTitle({ title }: Props) {
  return <h4 className={styles.title}>{title}</h4>;
}

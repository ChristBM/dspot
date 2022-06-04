import styles from './Tabs.module.css';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function Tabs({ children }: Props) {
  return <div className={styles.tabs}>{children}</div>;
}

import InfoTitle from '@components/InfoTitle';

import styles from './InfoElement.module.css';

type Props = {
  title: string;
  text: string;
};

export default function InfoElement({ title, text }: Props) {
  return (
    <li title={text} className={styles.info_element}>
      <InfoTitle title={title} />
      <p className={styles.info_text}>{text}</p>
    </li>
  );
}

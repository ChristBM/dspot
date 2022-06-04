import styles from './Icon.module.css';

type Props = {
  iconType: 'arrow_back' | 'exit';
};

export default function Icon({ iconType }: Props) {
  return (
    <div
      role="figure"
      className={`${styles.icon}
      ${iconType === 'arrow_back' ? styles.icon_bg__arrowback : ''}
      ${iconType === 'exit' ? styles.icon_bg__exit : ''}`}
    />
  );
}

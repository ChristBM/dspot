import styles from './TabLabel.module.css';

type Props = {
  labelTxt: string;
  isDefaultChecked: boolean;
  group: string;
  children: JSX.Element | JSX.Element[];
};

export default function TabLabel({
  labelTxt,
  isDefaultChecked,
  group,
  children,
}: Props) {
  return (
    <>
      <input
        type="radio"
        value="info"
        id={labelTxt}
        name={group}
        defaultChecked={isDefaultChecked}
        readOnly
        className={styles.input_radio}
      />

      <label htmlFor={labelTxt} className={styles.label_radio}>
        {labelTxt}
        <span />
      </label>

      <div className={styles.tab}>{children}</div>
    </>
  );
}

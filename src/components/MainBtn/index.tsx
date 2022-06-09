import styles from './MainBtn.module.css';

type Props = {
  text: string;
  disable: boolean;
  handleClick: () => void;
};

export default function MainBtn({ text, disable, handleClick }: Props) {
  return (
    <button
      type="button"
      className={`${disable ? styles.main_btn__disable : styles.main_btn}`}
      onClick={disable ? () => null : handleClick}
    >
      {text}
    </button>
  );
}

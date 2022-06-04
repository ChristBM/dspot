import useImgValidator from '@utils/hooks/useImgValidator';
import Available from '@components/Available';
import Avatar from '@components/Avatar';
import MainBtn from '@components/MainBtn';
import Name from '@components/Name';
import Status from '@components/Status';

import avatar from '@public/avatar.jpg';

import styles from './ListElement.module.css';

type Props = {
  id: string;
  img: string;
  name: string;
  status: string;
  available: boolean;
};

export default function ListElement({
  id,
  img,
  name,
  status,
  available,
}: Props) {
  const isAnImage = useImgValidator(img);

  return (
    <li className={styles.li}>
      <section className={styles.li_left}>
        <article className={styles.li_left__image}>
          <Avatar mode="list" img={isAnImage ? img : avatar} />
          <div className={styles.li_left__available}>
            <Available available={available} mode="list" />
          </div>
        </article>

        <article className={styles.li_left__info}>
          <Name mode="list" name={name} />
          <div className={styles.li_left__info_status}>
            <Status text={status} />
          </div>
        </article>
      </section>

      <section className={styles.li_right}>
        <MainBtn text="Details" id={id} disable={false} />
      </section>
    </li>
  );
}

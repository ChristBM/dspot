import { NextRouter, useRouter } from 'next/router';
import useImgValidator from '@utils/hooks/useImgValidator';
import Available from '@components/Available';
import Avatar from '@components/Avatar';
import MainBtn from '@components/MainBtn';
import Name from '@components/Name';
import Status from '@components/Status';

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
  const router: NextRouter = useRouter();
  const isAnImage = useImgValidator(img);

  return (
    <li className={styles.li}>
      <section className={styles.li_left}>
        <article className={styles.li_left__image}>
          <Avatar mode="list" img={isAnImage ? img : '/avatar.jpg'} />
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
        <MainBtn
          text="Details"
          disable={false}
          handleClick={() => router.push(`/friend/${id}`)}
        />
      </section>
    </li>
  );
}

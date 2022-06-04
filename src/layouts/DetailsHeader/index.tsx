import { useRouter } from 'next/router';
import { useGetDetailsQuery } from '@redux/apis/friends';
import useImgValidator from '@utils/hooks/useImgValidator';
import { FriendsDetails } from '@utils/interfaces/FriendsDetails';
import Available from '@components/Available';
import Avatar from '@components/Avatar';
import Name from '@components/Name';
import Status from '@components/Status';

import avatar2 from '@public/avatar2.jpg';

import styles from './DetailsHeader.module.css';

export default function DetailsHeader() {
  const router = useRouter();
  const { data } = useGetDetailsQuery(router.query?.id ? 'id' : 'id');
  const {
    img,
    available,
    first_name: firstName,
    last_name: lastName,
    statuses,
  } = data as FriendsDetails;
  const isAnImage = useImgValidator(img);

  return (
    <header className={styles.details_header}>
      <section className={styles.details_header__avatar}>
        <Avatar img={isAnImage ? img : avatar2} mode="details" />
        <div className={styles.details_header__available}>
          <Available available={available} mode="details" />
        </div>
      </section>

      <section className={styles.details_header__name_status}>
        <Name name={`${firstName} ${lastName}`} mode="details" />
        <Status text={statuses[0] ? statuses[0] : 'unknown'} />
      </section>
    </header>
  );
}

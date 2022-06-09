import useGetFriendsDetails from '@utils/hooks/useGetFriendsDetails';
import Available from '@components/Available';
import Avatar from '@components/Avatar';
import Name from '@components/Name';
import Status from '@components/Status';

import styles from './DetailsHeader.module.css';

export default function DetailsHeader() {
  const { img, available, name, status } = useGetFriendsDetails();

  return (
    <header className={styles.details_header}>
      <section className={styles.details_header__avatar}>
        <Avatar img={img} mode="details" />
        <div className={styles.details_header__available}>
          <Available available={available} mode="details" />
        </div>
      </section>

      <section className={styles.details_header__name_status}>
        <Name name={name} mode="details" />
        <Status text={status} />
      </section>
    </header>
  );
}

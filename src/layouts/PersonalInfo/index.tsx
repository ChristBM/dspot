import useGetPersonalInfo from '@utils/hooks/useGetPersonalInfo';
import InfoElement from '@layouts/InfoElement';
import InfoTitle from '@components/InfoTitle';
import Separator from '@components/Separator';

import styles from './PersonalInfo.module.css';

export default function PersonalInfo() {
  const { friendInfo, friendBio, friendPhone } = useGetPersonalInfo();

  return (
    <section className={styles.information}>
      <article className={styles.info_top}>
        <InfoTitle title="Bio:" />
        <p className={styles.info_top__bio}>{friendBio}</p>
      </article>

      <Separator />

      <InfoElement key="Phone:" title="Phone:" text={friendPhone} />

      <Separator />

      <ul className={styles.info_list}>
        {friendInfo.map((i) => (
          <InfoElement
            key={Math.random().toString(36).slice(0, 6)}
            title={i.title}
            text={i.text}
          />
        ))}
      </ul>
    </section>
  );
}

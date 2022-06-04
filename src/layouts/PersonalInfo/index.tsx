import { useRouter } from 'next/router';
import { useGetDetailsQuery } from '@redux/apis/friends';
import { PersonalInformation } from '@utils/interfaces/PersonalInformation';
import InfoElement from '@layouts/InfoElement';
import InfoTitle from '@components/InfoTitle';
import Separator from '@components/Separator';

import styles from './PersonalInfo.module.css';

export default function PersonalInfo() {
  const router = useRouter();
  const { data } = useGetDetailsQuery(router.query?.id ? 'id' : 'id');
  const {
    bio,
    phone,
    address_1: address,
    city,
    state,
    zipcode,
  } = data as PersonalInformation;

  const information = [
    {
      title: 'Address:',
      text: address,
    },
    {
      title: 'City:',
      text: city,
    },
    {
      title: 'State:',
      text: state,
    },
    {
      title: 'Zipcode:',
      text: zipcode,
    },
  ];

  return (
    <section className={styles.information}>
      <article className={styles.info_top}>
        <InfoTitle title="Bio:" />
        <p className={styles.info_top__bio}>{bio}</p>
      </article>

      <Separator />

      <InfoElement key="Phone:" title="Phone:" text={phone} />

      <Separator />

      <ul className={styles.info_list}>
        {information.map((i) => (
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

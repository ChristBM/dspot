import Gallery from '@layouts/Gallery';
import PersonalInfo from '@layouts/PersonalInfo';
import TabLabel from '@layouts/TabLabel';

import styles from './DetailsMain.module.css';

export default function DetailsMain() {
  return (
    <main className={styles.details_main}>
      <TabLabel labelTxt="info" isDefaultChecked group="g_details">
        <PersonalInfo />
      </TabLabel>

      <TabLabel labelTxt="photos" isDefaultChecked={false} group="g_details">
        <Gallery />
      </TabLabel>
    </main>
  );
}

import Gallery from '@layouts/Gallery';
import PersonalInfo from '@layouts/PersonalInfo';
import TabLabel from '@layouts/TabLabel';
import Tabs from '@layouts/Tabs';

export default function DetailsMain() {
  return (
    <Tabs>
      <TabLabel labelTxt="info" isDefaultChecked group="g_details">
        <PersonalInfo />
      </TabLabel>

      <TabLabel labelTxt="photos" isDefaultChecked={false} group="g_details">
        <Gallery />
      </TabLabel>
    </Tabs>
  );
}

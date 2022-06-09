import { useGetFriendsQuery } from '@redux/apis/friends';
import ListElement from '@layouts/ListElement';
import LoadingError from '@components/LoadingError';
import Spinner from '@components/Spinner';

import styles from './List.module.css';

export default function List() {
  const { data, isLoading, error } = useGetFriendsQuery();

  return (
    <section className={styles.ul_container}>
      <h1 className={styles.ul_title}>Friends</h1>

      <main className={styles.list}>
        {isLoading && <Spinner />}

        {error && <LoadingError text="Oops... Connection Error!" />}

        {!isLoading && !error ? (
          <ul className={styles.ul}>
            {data?.map((friend) => (
              <ListElement
                key={`${friend.id}-${friend.first_name}`}
                id={friend.id.toString()}
                img={friend.img}
                name={`${friend.first_name} ${friend.last_name}`}
                status={friend.status}
                available={friend.available}
              />
            ))}
          </ul>
        ) : null}
      </main>
    </section>
  );
}

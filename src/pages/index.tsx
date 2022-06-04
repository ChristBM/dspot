import { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import List from '@layouts/List';

const Home: NextPage = () => (
  <div className={styles.home}>
    <Head>
      <title>List of Friends</title>
      <meta name="description" content="List of Friends" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <List />
  </div>
);

export default Home;

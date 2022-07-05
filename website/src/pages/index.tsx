import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Btn from '../components/create';
import Modal from '../components/createModal';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();
  
  return (
    <div className={styles.container}>
      <div
        style={{
          position: 'absolute', 
          bottom: 0,
          right: 0,
          margin: 10,
          zIndex: 3,
        }}
      >
        <Btn onClick={() => router.push("/create")} />
      </div>
    </div>
  );
};

export default Home;

/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import Btn from '../components/create';
import styles from '../styles/Home.module.css';



interface post {
  id : string;
  created_at : string;
  text : string;
}
const Home: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<post[]>([]);


  const fetchData = async() => {
    try {
      const { data } = await axios.get("/api/gp");
        
      if(data.message === "Success") 
      {
        setData(data.data);
      }

      if(data.message === "Error")
      {
        alert("Somthing went wrong, try visiting later");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //fetch data
    fetchData()
    console.log(data);
    
  }, [])
  
  return (
    <div className={styles.container}>
      <div className={styles.postContainer}>
        <div className={styles.posts}>
          {data.map((post, index) => {
            return (
              <span key={index}>
                <Card created_at={post.created_at} text={post.text} id={post.id}/>
              </span>
            )
          }
          )}
        </div>
    </div>
    <div>
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
    </div>
  );
};

export default Home;

/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from '../../styles/card.module.css';

interface post {
    id : string;
    created_at : string;
    text : string;
  }

  
const Card: React.FC = () => {
    const router = useRouter();
    const [error, setError] = React.useState<boolean>(false);
    const [message, setMessage] = React.useState<string>("");
    const [cardData, setCardData] = React.useState<post>();
    

    const getCardId = () => {
        return window.location.pathname.split("/")[2];
    }

    const fetchData = async() => {
        try {

            const cardID = getCardId();
            const { data } = await axios.get(`/api/am?cardID=${cardID}`);
            if(data.message === "Success")
            {
                setCardData(data.data[0]);
            }
            if(data.message === "Error")
            {
                setError(true);
                setMessage(data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            {
                error ? <h1>{message}</h1> : (
                    <div className={styles.big_container_container}>
                        <div className={styles.big_card}>
                            <p>{cardData?.text}</p>
                        </div>                        
                    </div>
                )
            }
        </div>
    )
}

export default Card;
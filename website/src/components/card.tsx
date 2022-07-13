import React, { Ref, useRef } from "react";
import styles from "../styles/card.module.css";
import {MdOutlineOpenInFull} from 'react-icons/md'
import {TbMessageReport} from 'react-icons/tb'
import { useRouter } from "next/router";

interface post {
    id : string;
    created_at : string;
    text : string;
  }




const Card: React.FC<post> = (cardData) => {
    const router = useRouter();

    return(
        <div className={styles.container} title={"Click to view the full text"} onClick={() => router.push(`/card/${cardData.id}`)}>
            <p>{cardData.text.split(" ").splice(0, 300).join(" ")}...</p>
        </div>
    )
}

export default Card;
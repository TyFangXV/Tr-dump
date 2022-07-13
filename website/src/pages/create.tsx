import { NextPage } from "next";
import React from "React";
import Modal from "../components/createModal";
import styles from '../styles/create.module.css';

const CreatePage:NextPage = () => {
    return(
        <div className={styles.container}>
         <Modal/>
        </div>
    )
}


export  default CreatePage;
import { NextPage } from "next";
import React from "react";
import Modal from "../components/createModal";
import styles from '../styles/create.module.css';

const CreatePage:NextPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.modal}>
                <Modal/>
            </div>
        </div>
    )
}


export  default CreatePage;
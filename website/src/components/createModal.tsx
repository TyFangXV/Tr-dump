import React from "react";
import styles from '../styles/modal.module.css'
import domSanitizer from "dompurify";
import MyEditor from "./Editor";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import Recaptcha from "./recaptcha";


const postText = async(text: string) => {
    const sanitizedText = domSanitizer.sanitize(text);

    try {
        const {data} = await axios.post("/api/post", {message: sanitizedText});
        return data;
    } catch (error) {
        console.log(error);
    }
}

const Modal:React.FC = () => {
    const router = useRouter();
    const [textValue, setTextValue] = React.useState("");
    const [clicked, setClicked] = React.useState(false);

    const handleClick = async() => {
        if(!clicked && textValue.length > 0) 
        {
            const response = await postText(textValue);
            setClicked(true);

            if(response.message === "Success") 
            {
                router.push(`/`);
            }

            if(response.message === "Error") 
            {
                alert("Error, please try again");
                router.push("/");
            }
        }
    }

    return (
        <div className={styles.container}>
         <div className={styles.TopBar}>
            <button className={styles.btn} onClick={async() => await handleClick()}>Post</button>
            <Recaptcha/>
         </div>
         <hr/>
         <MyEditor value={textValue} onTextChange={(t) => setTextValue(t)}/>
        </div>
    )
}

export default Modal
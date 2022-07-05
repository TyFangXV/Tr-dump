import React from "react";
import styles from '../styles/modal.module.css'
import MyEditor from "./Editor";

const Modal:React.FC = () => {
    const [textValue, setTextValue] = React.useState("");

    console.log(textValue);
    
    return (
        <div className={styles.container}>
         <div className={styles.TopBar}>
            <button className={styles.btn}>Post</button>
         </div>
         <MyEditor value={textValue} onTextChange={(t) => setTextValue(t)}/>
         <hr/>
        </div>
    )
}

export default Modal
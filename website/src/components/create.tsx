import React from 'React'
import styles from '../styles/AddBtn.module.css'
import {BsPlusLg} from 'react-icons/bs'

type Props = {
    onClick: () => void;
}

const CreateButton:React.FC<Props> = ({onClick}) => {
    return (
        <div className={styles.container} onClick={() => onClick()}>
            <BsPlusLg className={styles.btn} />
        </div>
    )
}


export default CreateButton
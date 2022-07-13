import React from 'react';
import styles from '../styles/create.module.css';
type Props = {
  value: string;
  onTextChange: (text: string) => void;
};

const MyEditor: React.FC<Props> = ({ value, onTextChange }) => {
  return (
    <div>
      <textarea
        autoComplete="true"
        maxLength={1000}
        spellCheck={true}
        onChange={(e) => onTextChange(e.target.value)}
        value={value}
        className={styles.editor}
      ></textarea>
    </div>
  );
};

export default MyEditor;

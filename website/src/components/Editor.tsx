import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

type Props = {
    onTextChange: (value: string) => void;
    value: string;
}

const MyEditor: React.FC<Props> = ({value, onTextChange}) => {
  return (
    <div style={{overflowY : 'hidden'}}>
      <RichTextEditor
        sticky={false}
        controls={[
          ['bold', 'italic', 'underline'],
          ['unorderedList', 'h1', 'h2', 'h3'],
          ['sup', 'sub'],
          ['alignLeft', 'alignCenter', 'alignRight'],
        ]}
        value={value}
        onChange={onTextChange}
      />
    </div>
  );
};

export default MyEditor;

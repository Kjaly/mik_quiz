import React from 'react';
import {
  StyledFileViewer,
  StyledFileItem,
  StyledFileImg,
  StyledFileRemove
} from './FileViewer.styled';
import { IconCross } from '../../Icons';

interface IFileViewerProps {
  files: Array<any>;
  setFiles: (files: Array<File>) => void;
}


export const FileViewer: React.FC<IFileViewerProps> = (props) => {
  const {files, setFiles} = props;

  const removeFile = (name: string): void => {
    const currentFiles = files.filter(item => item.name !== name);
    setFiles(currentFiles);
  }

  return (
    <StyledFileViewer>
      {files.map((item, index) =>
        <StyledFileItem key={index}>
          <StyledFileImg
            src={URL.createObjectURL(item)}
            alt={item.name}
          />
          <StyledFileRemove onClick={() => removeFile(item.name)}>
            <IconCross/>
          </StyledFileRemove>
        </StyledFileItem>
      )}
    </StyledFileViewer>
  );
};

import React from 'react';
import { StyledFileImg, StyledFileItem, StyledFileRemove, StyledFileViewer } from './FileViewer.styled';
import { IconCross } from '../../Icons';

interface IFileViewerProps {
  files: Array<any>;
  setFiles: (files: Array<File>) => void;
}


export const FileViewer: React.FC<IFileViewerProps> = (props) => {
  const {files, setFiles} = props;

  const removeFile = (id: number, name: string): void => {
    const currentFiles = files.filter(item => item.id ? item.id !== id : item.name !== name);
    setFiles(currentFiles);
  };
  return (
    <StyledFileViewer>
      {files.map((item, index) => {
          const source = item?.url ? item?.url : URL.createObjectURL(item);
          return (
            <StyledFileItem key={index}>
              <StyledFileImg
                src={source}
                alt={item.name}
              />
              <StyledFileRemove onClick={() => removeFile(item.id, item.name)}>
                <IconCross/>
              </StyledFileRemove>
            </StyledFileItem>
          );
        },
      )}
    </StyledFileViewer>
  );
};

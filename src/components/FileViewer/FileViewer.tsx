import React from 'react';
import { StyledFileImg, StyledFileItem, StyledFileRemove, StyledFileViewer } from './FileViewer.styled';
import { IconCross } from '../../Icons';
import { useDispatch, useSelector } from 'react-redux';
import { removePublicationImgRequest } from '../../store/publications/actions';
import { TPublication } from '../../store/publications/types';
import { publicationsSelector } from '../../store/publications/selectors';

interface IFileViewerProps {
  files: Array<any>;
  setFiles: (files: Array<File>) => void;
  publicationId?: number;
}


export const FileViewer: React.FC<IFileViewerProps> = (props) => {
  const {files, setFiles, publicationId} = props;
  const dispatch = useDispatch();
  const publications: Array<TPublication> | null = useSelector(publicationsSelector.getPublicationsSelector);

  const removeFile = (id: number, name: string): void => {
    const currentFiles = files.filter(item => item.id ? item.id !== id : item.name !== name);
    if (id) {
      const currentPublications = publications?.map(item => {
        if (item.id === publicationId) {
          const currentItem = {...item, photos: item?.photos?.filter(photo => photo.id !== id)};
          return currentItem;
        }
        return item;
      });
      if (currentPublications) {
        dispatch(removePublicationImgRequest({publicationsList: currentPublications}));
      }
    }
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

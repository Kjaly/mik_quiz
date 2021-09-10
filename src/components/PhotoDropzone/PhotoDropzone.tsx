import React from 'react';
import { useDropzone } from 'react-dropzone';
import {
  StyledAccepted,
  StyledButton,
  StyledPhotoDropZone,
  StyledSettings,
  StyledTextZone
} from './PhotoDropzone.styled';
import { Button } from '../Button';
import { theme } from '../../theme';

export interface IPhotoDropzoneProps {
  name?: string;
  files?: Array<File>;
  setFiles: (files: Array<File>) => void;
}

export const PhotoDropzone: React.FC<IPhotoDropzoneProps> = (props) => {
  const acceptedFormats = ['.jpeg' ,'.png']
  const maxFileSize = 2097152; // 2mb in bytes

  const {name, files, setFiles} = props
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: (acceptedFiles) => {
      const uploadFiles = acceptedFiles;
      if (files) {
        setFiles([...files,...acceptedFiles])
      } else {
        setFiles(acceptedFiles)
      }
    },
    onDropRejected: () => {
      console.log('reject')
    },
    accept: '.jpeg, .png',
    maxSize: maxFileSize,
  });

  const dropzoneRootProps = getRootProps();
  const dropzoneInputProps = getInputProps();
  return (
    <StyledPhotoDropZone isDragActive={isDragActive} {...dropzoneRootProps}>
      <StyledButton>
        <Button
          background={theme.color.blue}
          title={'Выберите файлы'}
          color={'#fff'}
          onClick={() => {
            console.log('Логин')
          }}/>
      </StyledButton>
      <StyledTextZone>
        <p>{isDragActive ? 'Бросайте их сюда' : 'Или перетяните файлы в это поле'}</p>
        <StyledSettings>
          <StyledAccepted>
            Разрешенные расширения <span>{acceptedFormats.map((item, index) => {
            const fileType = item.substr(1);
            return (index === acceptedFormats.length - 1 ? fileType : `${fileType}, `)
          })}</span>
          </StyledAccepted>
          <StyledAccepted>
            Макс. размер файла <span>{maxFileSize / 1024 / 1024}МБ</span>
          </StyledAccepted>
        </StyledSettings>
      </StyledTextZone>
      <input name={name} {...dropzoneInputProps} />
    </StyledPhotoDropZone>
  );
};



import React, { useState } from 'react';
import { ModalTemplate } from '../ModalTemplate';
import {
  StyledActiveWrapper,
  StyledAddPublicationModal,
  StyledButton,
  StyledCross,
  StyledDropDownWrapper,
  StyledFileViewer,
  StyledPublicationsTitle
} from './AddPublicationModal.styled';
import { DropdownSelect } from '../../FormFinal/DropdownSelect';
import { IconCross } from '../../../Icons';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../FormFinal/InputText';
import { InputTextarea } from '../../FormFinal/InputTextarea';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { PhotoDropzone } from '../../PhotoDropzone';
import { FileViewer } from '../../FileViewer';
import { useDispatch } from "react-redux";
import { piblicationsActions } from "../../../store/publications/actions";

export interface IAddPublicationModalProps {
  closeModal?: () => void;
}

export const AddPublicationModal: React.FC<IAddPublicationModalProps> = (props) => {
  const {closeModal} = props
  const dispatch = useDispatch();

  const categoryOptions = ['Корпус', 'Ужас', 'Доклад', 'Выступление', 'Карта']
  const typeList = ['Галерея фото', 'Видео']

  const [option, setOption] = useState('');
  const [files, setFiles] = useState<Array<File>>([]);

  const [type, setType] = useState('');


  const handleSubmitForm = (values: any) => {
    const filePreviewUrl = files[0] ? URL.createObjectURL(files[0]) : values.url;

    dispatch(piblicationsActions.addPublication({...values, files, option, type, url:filePreviewUrl}))
  }


  return (
    <ModalTemplate>
      <StyledAddPublicationModal>
        <StyledPublicationsTitle>Добавление публикации</StyledPublicationsTitle>
        <Form
          initialValues={{}}
          onSubmit={handleSubmitForm}
          render={(renderProps): JSX.Element => {
            const {values, handleSubmit} = renderProps
            return (
              <>
                <StyledDropDownWrapper>
                  <DropdownSelect
                    setOption={setOption}
                    placeholder="Категория"
                    name={'category'}
                    option={option}
                    optionsList={categoryOptions}/>
                  <DropdownSelect
                    disabled={!option}
                    setOption={setType}
                    name={'type'}
                    placeholder="Тип публикации"
                    option={type}
                    optionsList={typeList}/>

                  <StyledActiveWrapper isActive={type === 'Видео'}>
                    <Field
                      name="title"
                      component={InputText}
                      type="text"
                      placeholder="Заголовок"
                    />
                    <Field
                      name="description"
                      component={InputTextarea}
                      placeholder="Описание"
                    />

                    <Field
                      name="url"
                      component={InputText}
                      type="text"
                      placeholder="Ссылка на видео в YouTube"
                    />
                  </StyledActiveWrapper>

                  <StyledFileViewer>
                    <FileViewer files={files} setFiles={setFiles}/>
                  </StyledFileViewer>
                </StyledDropDownWrapper>

                <StyledActiveWrapper isActive={type === 'Галерея фото'}>
                  <PhotoDropzone
                    files={files}
                    setFiles={setFiles}
                    name={'dropzone'}/>
                </StyledActiveWrapper>

                  <StyledActiveWrapper isActive={type === 'Видео' || !!files.length}>
                    <StyledButton>
                      <Button
                        disabled={type === 'Видео' && !values.url}
                        background={theme.color.blue}
                        color={'#fff'}
                        title={'Добавить'}
                        onClick={handleSubmit}/>
                    </StyledButton>
                  </StyledActiveWrapper>
              </>
            )
          }}/>

        <StyledCross onClick={closeModal}>
          <IconCross/>
        </StyledCross>
      </StyledAddPublicationModal>
    </ModalTemplate>
  )
    ;
};

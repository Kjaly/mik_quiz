import React, { useState } from 'react';
import { ModalTemplate } from '../ModalTemplate';
import {
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

export interface IAddPublicationModalProps {
  closeModal?: () => void;
}

export const AddPublicationModal: React.FC<IAddPublicationModalProps> = (props) => {
  const {closeModal} = props

  const categoryOptions = ['Корпус', 'Ужас', 'Доклад', 'Выступление', 'Карта']
  const typeList = ['Галерея фото', 'Видео']

  const [option, setOption] = useState('');
  const [files, setFiles] = useState<Array<File>>([]);

  console.log(typeList);
  const [type, setType] = useState('');


  const handleSubmitForm = (values: any) => {
    console.log(values)
  }

  return (
    <ModalTemplate>
      <StyledAddPublicationModal>
        <StyledPublicationsTitle>Добавление публикации</StyledPublicationsTitle>
        <Form
          initialValues={{}}
          onSubmit={handleSubmitForm}
          render={(renderProps): JSX.Element => {
            const {values} = renderProps
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

                  {type === 'Видео' && (
                    <>
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


                    </>
                  )}
                  <StyledFileViewer>
                    <FileViewer files={files} setFiles={setFiles}
                    />
                  </StyledFileViewer>
                </StyledDropDownWrapper>

                {type === 'Галерея фото' && (
                  <PhotoDropzone
                    files={files}
                    setFiles={setFiles}
                    name={'dropzone'}/>
                )}

                {(type === 'Видео' || files) && (
                  <StyledButton>
                    <Button
                      background={theme.color.blue}
                      color={'#fff'}
                      title={'Добавить'}
                      onClick={() => {
                        console.log('Отправить')
                      }}/>
                  </StyledButton>
                )}
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

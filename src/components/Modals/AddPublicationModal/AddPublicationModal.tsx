import React, { useState } from 'react';
import { ModalTemplate } from '../ModalTemplate';
import {
  StyledActiveWrapper,
  StyledAddPublicationModal,
  StyledButton,
  StyledCompleteIcon,
  StyledCompletePublication,
  StyledCompleteText,
  StyledCross,
  StyledDropDownWrapper,
  StyledFileViewer,
  StyledMobileIcon,
  StyledPublicationsTitle
} from './AddPublicationModal.styled';
import { DropdownSelect } from '../../FormFinal/DropdownSelect';
import { IconArrowRight, IconCheckCircle, IconCross } from '../../../Icons';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../FormFinal/InputText';
import { InputTextarea } from '../../FormFinal/InputTextarea';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { PhotoDropzone } from '../../PhotoDropzone';
import { FileViewer } from '../../FileViewer';
import { useDispatch } from 'react-redux';
import { piblicationsActions } from '../../../store/publications/actions';

export interface IAddPublicationModalProps {
  closeModal?: () => void;
}

export const AddPublicationModal: React.FC<IAddPublicationModalProps> = (props) => {
  const {closeModal} = props
  const dispatch = useDispatch();

  const categoryOptions = ['Региональные слеты', 'Межрегиональные слеты']
  const typeList = ['Галерея фото', 'Видео']
  const [step, setStep] = useState(0);
  const [option, setOption] = useState('');
  const [files, setFiles] = useState<Array<File>>([]);

  const [type, setType] = useState('');

  const handleSubmitForm = (values: any) => {
    const filePreviewUrl = files[0] ? URL.createObjectURL(files[0]) : values.url;

    dispatch(piblicationsActions.addPublication({...values, files, option, type, url: filePreviewUrl}))
    setStep(1)
    // dispatch(modalsActions.closeModalAction())
  }

  return (
    <ModalTemplate>
      <StyledAddPublicationModal step={step}>
        <StyledPublicationsTitle>
          {step === 1 && (
            <StyledMobileIcon>
              <IconCheckCircle/>
            </StyledMobileIcon>
          )}
          Добавление публикации
          <StyledCross onClick={closeModal}>
            <IconCross/>
          </StyledCross>
        </StyledPublicationsTitle>
        {step === 0 ? (
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
                      {files.length ? <FileViewer files={files} setFiles={setFiles}/> : null}
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
                        icon={IconArrowRight}
                        reversed
                        disabled={type === 'Видео' && !values.url}
                        background={theme.color.yellow}
                        color={'#fff'}
                        title={'Добавить'}
                        onClick={handleSubmit}/>
                    </StyledButton>
                  </StyledActiveWrapper>
                </>
              )
            }}/>
        ) : (
          <StyledCompletePublication>
            <StyledCompleteIcon>
              <IconCheckCircle/>
            </StyledCompleteIcon>
            <StyledCompleteText>
              Публикация отправлена на проверку модератором, мы отправим вам уведомление с результатами проверки на ваш
              электронный адрес.
            </StyledCompleteText>
          </StyledCompletePublication>
        )}


      </StyledAddPublicationModal>
    </ModalTemplate>
  )
    ;
};

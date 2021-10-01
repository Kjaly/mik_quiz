import React, { useEffect, useState } from 'react';
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
  StyledPublicationsTitle,
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
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoriesRequest,
  postPublicationsRequest,
  updatePublicationRequest,
} from '../../../store/publications/actions';
import { TCategory, TPhoto } from '../../../store/publications/types';
import { publicationsSelector } from '../../../store/publications/selectors';
import { modalsSelectors } from '../../../store/modals/selectors';

export interface IAddPublicationModalProps {
  closeModal?: () => void;
}


export const AddPublicationModal: React.FC<IAddPublicationModalProps> = (props) => {
  const {closeModal} = props;
  const dispatch = useDispatch();

  const modalProps = useSelector(modalsSelectors.getModalProps);
  const categories: Array<TCategory> | null = useSelector(publicationsSelector.getCategoriesSelector);

  const [categoryList, setCategoryList] = useState<Array<TCategory>>([]);
  const typeList = [{id: 1, name: 'Галерея фото'}, {id: 2, name: 'Видео'}];
  const [step, setStep] = useState(0);
  const [option, setOption] = useState<TCategory>();
  const [photos, setPhotos] = useState<Array<File>>([]);
  const [photosUrl, setPhotosUrl] = useState<Array<TPhoto>>([]);
  const [allPhotos, setAllPhotos] = useState<Array<any>>([]);
  const [type, setType] = useState<{ id: number, name: string }>();


  const handleSubmitForm = (values: any) => {
    let data = {
      publication_category_id: option?.id,
      type: type?.id,
      ...values,
    };

    if (photos.length) {
      data = {...data, photos};
    }
    if (modalProps?.publication) {
      const photos_ids = modalProps?.publication?.photos?.map((item: TPhoto) => item.id);
      dispatch(updatePublicationRequest({...data, photos_ids, id: modalProps?.publication?.id}));
    } else {
      dispatch(postPublicationsRequest({...data}));
    }
    setStep(1);
    // dispatch(modalsActions.closeModalAction())
  };
  console.log(modalProps?.publication);

  useEffect(() => {
    if (!categories?.length) {
      dispatch(fetchCategoriesRequest());
    }
  }, []);

  useEffect(() => {
    if (categories?.length) {
      setCategoryList(categories);
    }
  }, [categories]);

  useEffect(() => {
    setPhotos([]);
  }, [type]);

  useEffect(() => {
    if (modalProps?.publication) {
      const currentOption = categoryList?.find(item => item.id === modalProps?.publication?.publication_category_id);
      const currentType = typeList?.find(item => item.id === modalProps?.publication?.type);
      setOption(currentOption);
      setType(currentType);
      setPhotosUrl(modalProps?.publication?.photos);
    }
  }, [modalProps?.publication, categoryList]);

  useEffect(() => {
    setAllPhotos([...photos, ...photosUrl]);
  }, [photos, photosUrl]);

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
            initialValues={{
              name: modalProps?.publication.name || '',
              description: modalProps?.publication.description || '',
              youtube_url: modalProps?.publication.youtube_url || '',
            }}
            onSubmit={handleSubmitForm}
            render={(renderProps): JSX.Element => {
              const {values, handleSubmit} = renderProps;
              return (
                <>
                  <StyledDropDownWrapper>
                    <DropdownSelect
                      setOption={setOption}
                      placeholder="Категория"
                      name={'category'}
                      option={option}
                      optionsList={categoryList}/>
                    <DropdownSelect
                      disabled={!option}
                      setOption={setType}
                      name={'type'}
                      placeholder="Тип публикации"
                      option={type}
                      optionsList={typeList}/>

                    <StyledActiveWrapper isActive={type?.id === 2}>
                      <Field
                        name="name"
                        component={InputText}
                        type="text"
                        placeholder="Заголовок"
                      />
                      <Field
                        name="description"
                        component={InputTextarea}
                        maxCount={150}
                        placeholder="Описание"
                      />

                      <Field
                        name="youtube_url"
                        component={InputText}
                        type="text"
                        placeholder="Ссылка на видео в YouTube"
                      />
                    </StyledActiveWrapper>

                    <StyledFileViewer>
                      {[allPhotos].length ? <FileViewer files={allPhotos} setFiles={setAllPhotos}/> : null}
                    </StyledFileViewer>
                  </StyledDropDownWrapper>

                  <StyledActiveWrapper isActive={type?.id === 1}>
                    <PhotoDropzone
                      files={photos}
                      setFiles={setPhotos}
                      name={'dropzone'}/>
                  </StyledActiveWrapper>

                  <StyledActiveWrapper isActive={type?.id === 2 || !!allPhotos.length}>
                    <StyledButton>
                      <Button
                        icon={IconArrowRight}
                        reversed
                        disabled={type?.id === 2 && !values.youtube_url}
                        background={theme.color.yellow}
                        color={'#fff'}
                        title={'Добавить'}
                        onClick={handleSubmit}
                      />
                    </StyledButton>
                  </StyledActiveWrapper>
                </>
              );
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

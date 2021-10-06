import React, { useEffect, useState } from 'react';
import { ModalTemplate } from '../ModalTemplate';
import {
  StyledActiveWrapper,
  StyledAddPublicationModal,
  StyledButton,
  StyledButtonsBlock,
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
  fetchCategoriesRequest, fetchPublicationsRequest,
  postPublicationsRequest,
  updatePublicationRequest,
} from '../../../store/publications/actions';
import { TCategory, TPhoto, TPublication } from '../../../store/publications/types';
import { publicationsSelector } from '../../../store/publications/selectors';
import { modalsSelectors } from '../../../store/modals/selectors';
import { asyncValidate } from '../../../services/forms/asyncValidate';
import { formsNames } from '../../../services/forms/formsNames';
import { setError } from '../../../services/forms/setFinalFormErrorMutator';
import { regexps } from '../../../contsants/regExps';
import { getUserIdSelector } from '../../../store/user/selectors';

export interface IAddPublicationModalProps {
  closeModal?: () => void;
}


export const AddPublicationModal: React.FC<IAddPublicationModalProps> = (props) => {
  const {closeModal} = props;
  const dispatch = useDispatch();
  const userId = useSelector(getUserIdSelector);

  const modalProps = useSelector(modalsSelectors.getModalProps);
  const categories: Array<TCategory> | null = useSelector(publicationsSelector.getCategoriesSelector);
  const publications: Array<TPublication> | null = useSelector(publicationsSelector.getPublicationsSelector);
  const [categoryList, setCategoryList] = useState<Array<TCategory>>([]);
  const typeList = [{id: 1, name: 'Галерея фото'}, {id: 2, name: 'Видео'}];
  const [step, setStep] = useState(0);
  const [option, setOption] = useState<TCategory>();
  const [photos, setPhotos] = useState<Array<File>>([]);
  const [photosUrl, setPhotosUrl] = useState<Array<TPhoto>>([]);
  const [allPhotos, setAllPhotos] = useState<Array<any>>([]);
  const [type, setType] = useState<{ id: number, name: string }>();
  const [currentPublication, setCurrentPublication] = useState<TPublication>();


  const handleSubmitForm = (values?: any) => {
    let data = {
      publication_category_id: option?.id,
      type: type?.id,
      ...values,
    };

    if (photos.length) {
      data = {...data, photos};
    }
    if (modalProps?.publication) {
      const photos_ids = currentPublication?.photos?.map((item: TPhoto) => item.id);
      dispatch(updatePublicationRequest({
        data: {...data, photos_ids, id: modalProps?.publication?.id},
        user_id: userId
      }));
    } else {
      dispatch(postPublicationsRequest({data: {...data}, user_id: userId}));
    }
    setStep(1);
  };


  useEffect(() => {
    if (!categories?.length) {
      dispatch(fetchCategoriesRequest());
    }
    return () => {
      dispatch(fetchPublicationsRequest({user_id: userId}));
    };
  }, []);

  useEffect(() => {
    setCurrentPublication(publications?.find(item => item.id === modalProps?.publication?.id));
  }, [modalProps?.publication, publications]);

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
      const currentPublication = publications?.find(item => item.id === modalProps?.publication?.id);

      setOption(currentOption);
      setPhotosUrl(currentPublication?.photos || photosUrl);

      if (type?.id !== currentType?.id) {
        setType(currentType);
      }
    }
  }, [modalProps?.publication, categoryList, publications]);

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
          {modalProps?.publication ? 'Редактирование' : 'Добавление'} публикации
          <StyledCross onClick={closeModal}>
            <IconCross/>
          </StyledCross>
        </StyledPublicationsTitle>
        {step !== 1 ? (
          <Form
            initialValues={type?.id === 2 && {
              name: modalProps?.publication.name || '',
              description: modalProps?.publication.description || '',
              youtube_url: modalProps?.publication.youtube_url || '',
            }}
            mutators={{setError}}
            onSubmit={handleSubmitForm}
            render={(renderProps): JSX.Element => {
              const {values, handleSubmit, form} = renderProps;
              const syncRegexValidate = (value: string) => {
                return regexps.website.test(value) ? undefined : 'Введите корректую ссылку на видео';
              };
              const handleValidate = async (): Promise<void> => {
                if (modalProps?.publication && step !== 2) {
                  return setStep(2)
                }
                const errors = type?.id === 2 && await asyncValidate(
                  values,
                  {
                    formName: formsNames.addPublication,
                  },
                  form.mutators.setError,
                );
                if (!errors) {
                  handleSubmit();
                } else {
                  setStep(0);
                }
              };
              return (
                <>
                  {step === 2 ? (
                    <>
                      После редактирования публикация попадет на повторную модерацию, вы уверены что хотите подвердить
                      изменения?
                      <StyledButtonsBlock>
                        <StyledButton step={step}>
                          <Button
                            reversed
                            background={theme.color.yellow}
                            title={'Да'}
                            color={'#fff'}
                            onClick={handleValidate}/>
                        </StyledButton>

                        <StyledButton step={step}>
                          <Button
                            reversed
                            background={theme.color.blue}
                            title={'Нет'}
                            color={'#fff'}
                            onClick={closeModal}
                          />
                        </StyledButton>

                      </StyledButtonsBlock>
                    </>
                  ) : (
                    <>
                      <StyledDropDownWrapper>
                        <DropdownSelect
                          setOption={setOption}
                          placeholder="Категория"
                          name={'category'}
                          option={option}
                          optionsList={categoryList}/>
                        {!modalProps?.publication &&
                        <DropdownSelect
                          disabled={!option}
                          setOption={setType}
                          name={'type'}
                          placeholder="Тип публикации"
                          option={type}
                          optionsList={typeList}/>
                        }


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
                            validate={syncRegexValidate}
                            name="youtube_url"
                            component={InputText}
                            type="text"
                            placeholder="Ссылка на видео в YouTube"
                          />
                        </StyledActiveWrapper>

                        <StyledFileViewer>
                          {[allPhotos].length
                            ? <FileViewer
                              files={allPhotos}
                              setFiles={setAllPhotos}
                              publicationId={modalProps?.publication?.id}
                            />
                            : null}
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
                            disabled={type?.id === 2 && (!values.youtube_url || form.getFieldState('youtube_url')?.error)}
                            background={theme.color.yellow}
                            color={'#fff'}
                            title={modalProps?.publication ? 'Сохранить' : 'Добавить'}
                            onClick={() => type?.id === 1 ? handleSubmitForm() : handleValidate()}
                          />
                        </StyledButton>
                      </StyledActiveWrapper>
                    </>
                  )}
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

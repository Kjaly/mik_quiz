import React, { useRef, useState } from 'react';
import {
  StyledAvatarInput,
  StyledButton,
  StyledIcon,
  StyledImgWrapper,
  StyledProfile,
  StyledProfileForm,
  StyledProfileFormWrapper,
  StyledProfileWrapper
} from './Profile.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { ContentWrapper } from '../../components/ContentWrapper';
import { ProfileImg } from '../../components/ProfileImg';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../components/FormFinal/InputText';
import { IconPen } from '../../Icons/IconPen';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorsSelector, getUserSelector } from '../../store/user/selectors';
import { Button } from '../../components/Button';
import { IconArrowRight } from '../../Icons';
import { theme } from '../../theme';
import { removeUserErrors, updateUserRequest } from '../../store/user/actions';
import { IUserRegistration } from '../../store/user/types';
import { InputFile } from '../../components/FormFinal/InputFile';
import { setError } from '../../services/forms/setFinalFormErrorMutator';

export const Profile: React.FC = () => {

  const inputFile = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch()
  const submitHandler = (values: IUserRegistration): void => {
    const currentValues = {...Object.fromEntries(Object.entries(values).filter(([_, v]) => v != null))} as IUserRegistration
    dispatch(updateUserRequest(currentValues))
  }


  const serverErrors = useSelector(getErrorsSelector);
  const user = useSelector(getUserSelector);
  const fileUrl = file ? URL.createObjectURL(file) : user?.photo?.url || ''
  const handleImgUpload = () => {
    inputFile?.current?.click();
  }
  return (
    <StyledProfileWrapper>
      <TitleBanner>Мой профиль</TitleBanner>
      <ContentWrapper>
        <StyledProfile>
          <StyledImgWrapper>
            <ProfileImg src={fileUrl}/>
            <StyledIcon onClick={handleImgUpload}>
              <IconPen/>
            </StyledIcon>
          </StyledImgWrapper>
          <Form
            initialValues={{
              middle_name: user?.middle_name,
              first_name: user?.first_name,
              last_name: user?.last_name,
              city: user?.city,
              school: user?.school,
              school_class: user?.school_class,
              school_teacher_history: user?.school_teacher_history,
              email: user?.email,
              password: null,
              password_confirmation: null,
              parental_agreement: null,
              photo: null,
            }}
            mutators={{setError}}
            onSubmit={submitHandler}
            render={(renderProps): JSX.Element => {
              const {values, form, handleSubmit} = renderProps;


              if (serverErrors && typeof serverErrors !== 'string') {
                Object.keys(serverErrors).forEach(item => {

                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  form.mutators.setError({[item]: serverErrors[item][0]})
                })
                dispatch(removeUserErrors())
              }
              return (
                <StyledProfileFormWrapper>
                  <StyledProfileForm>
                    <StyledAvatarInput>
                      <Field name={'photo'}>
                        {({input: {onChange, name}}) => (
                          <input
                            ref={inputFile}
                            type="file"
                            name={name}
                            onChange={({target}) => {
                              if (target?.files && target?.files?.length > 0) {
                                setFile(target.files[0])
                                onChange(target.files[0])
                              }
                            }
                            }
                          />
                        )}
                      </Field>
                    </StyledAvatarInput>
                    <Field
                      autoComplete={'off'}
                      name="first_name"
                      component={InputText}
                      type="text"
                      placeholder="Имя"
                    />
                    <Field
                      autoComplete={'off'}
                      name="middle_name"
                      component={InputText}
                      type="text"
                      placeholder="Фамилия"
                    />
                    <Field
                      autoComplete={'off'}
                      name="last_name"
                      component={InputText}
                      type="text"
                      placeholder="Отчество"
                    />
                    <Field
                      autoComplete={'off'}
                      name="city"
                      component={InputText}
                      type="text"
                      placeholder="Город"
                    />
                    <Field
                      autoComplete={'off'}
                      name="school"
                      component={InputText}
                      type="text"
                      placeholder="Школа"
                    />
                    <Field
                      autoComplete={'off'}
                      name="school_class"
                      component={InputText}
                      type="text"
                      placeholder="Класс"
                    />
                    <Field
                      autoComplete={'off'}
                      name="school_teacher_history"
                      component={InputText}
                      type="text"
                      placeholder="ФИО учителя истории"
                    />

                    <Field
                      autoComplete={'email'}
                      name="email"
                      component={InputText}
                      type="email"
                      placeholder="Почта"
                    />
                    <Field
                      autoComplete={'off'}
                      name="password"
                      component={InputText}
                      type="password"
                      placeholder="Пароль"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="password_confirmation"
                      component={InputText}
                      type="password"
                      placeholder="Подтверждение пароля"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="parental_agreement"
                      component={InputFile}
                      placeholder="Соглашение"
                      uploadText={'Соглашение выбрано'}
                      completed={!!user.parental_agreement_id}
                    />
                  </StyledProfileForm>
                  <StyledButton>
                    <Button
                      reversed
                      icon={IconArrowRight}
                      background={theme.color.yellow}
                      title={'Сохранить'}
                      color={'#fff'}
                      onClick={handleSubmit}/>
                  </StyledButton>
                </StyledProfileFormWrapper>
              )
            }}
          />

        </StyledProfile>
      </ContentWrapper>
    </StyledProfileWrapper>
  );
};

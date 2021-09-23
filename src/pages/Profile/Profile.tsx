import React, { useEffect, useRef, useState } from 'react';
import {
  StyledAvatarInput,
  StyledButton,
  StyledEmailField,
  StyledIcon,
  StyledImgWrapper,
  StyledProfile,
  StyledProfileForm,
  StyledProfileFormWrapper,
  StyledProfileWrapper,
  StyledVerifiedEmail,
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
import { asyncValidate } from "../../services/forms/asyncValidate";
import { formsNames } from "../../services/forms/formsNames";

export const Profile: React.FC = () => {

  const inputFile = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState('');
  const user = useSelector(getUserSelector);

  const dispatch = useDispatch()
  const submitHandler = (values: IUserRegistration): void => {
    const currentValues = {...Object.fromEntries(Object.entries(values).filter(([_, v]) => v != null))} as IUserRegistration
    dispatch(updateUserRequest({user, data: currentValues}))
  }


  const serverErrors = useSelector(getErrorsSelector);
  useEffect(() => {
    console.log(user)
    console.log(file)
    if (file) {
      console.log(1)
      return setFileUrl(URL.createObjectURL(file))
    }
    if (user?.photo?.url) {
      console.log(2)
      setFileUrl(user?.photo?.url)
    }

  }, [file, user])

  const handleImgUpload = (): void => {
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
              middle_name: user?.middle_name ? user?.middle_name : '',
              first_name: user?.first_name ? user?.first_name : '',
              last_name: user?.last_name ? user?.last_name : '',
              city: user?.city ? user?.city : '',
              school: user?.school ? user?.school : '',
              birthday: user?.birthday ? user?.birthday : '',
              school_class: user?.school_class ? user?.school_class : '',
              school_teacher_history: user?.school_teacher_history ? user?.school_teacher_history : '',
              email: user?.email ? user?.email : '',
              password: null,
              password_confirmation: null,
              parental_agreement: null,
              parental_agreement_id: user?.parental_agreement_id ? user?.parental_agreement_id : '',
              photo: null,
            }}
            mutators={{setError}}
            onSubmit={submitHandler}
            render={(renderProps): JSX.Element => {
              const {values, form, handleSubmit} = renderProps;

              const handleValidate = async (): Promise<void> => {
                console.log(values);
                const errors = await asyncValidate(
                  values,
                  {
                    formName: formsNames.profileUpdate,
                  },
                  form.mutators.setError,
                );
                if (!errors) {
                  handleSubmit();
                }
              };

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
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="last_name"
                      component={InputText}
                      type="text"
                      placeholder="Фамилия"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="middle_name"
                      component={InputText}
                      type="text"
                      placeholder="Отчество"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="birthday"
                      min='2003-01-01'
                      max='2016-01-01'
                      component={InputText}
                      type="date"
                      placeholder="Дата рождения"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="city"
                      component={InputText}
                      type="text"
                      placeholder="Город"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="school"
                      component={InputText}
                      type="text"
                      placeholder="Школа"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="school_class"
                      component={InputText}
                      type="text"
                      maxLength={3}
                      placeholder="Класс"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="school_teacher_history"
                      component={InputText}
                      type="text"
                      placeholder="ФИО учителя истории"
                      errors={serverErrors}
                    />
                    <Field
                      autoComplete={'off'}
                      name="parental_agreement"
                      component={InputFile}
                      placeholder="Соглашение"
                      uploadText={'Соглашение выбрано'}
                      completed={!!user.parental_agreement_id}
                      errors={serverErrors}
                    />
                  </StyledProfileForm>
                  <hr/>
                  <StyledProfileForm>
                    <StyledEmailField>
                      <Field
                        autoComplete={'email'}
                        name="email"
                        component={InputText}
                        type="email"
                        placeholder="Почта"
                      />
                      {!user.email_verified_at &&
                      (
                        <StyledVerifiedEmail>
                          Почта не подтвеждена.
                          <span onClick={() => submitHandler(values)}>Подтвердить</span>
                        </StyledVerifiedEmail>
                      )}
                    </StyledEmailField>
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

                  </StyledProfileForm>
                  <StyledButton>
                    <Button
                      reversed
                      icon={IconArrowRight}
                      background={theme.color.yellow}
                      title={'Сохранить'}
                      color={'#fff'}
                      onClick={handleValidate}/>
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

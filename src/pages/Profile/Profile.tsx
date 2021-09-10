import React, { useRef, useState } from 'react';
import {
  StyledImgWrapper,
  StyledProfile,
  StyledProfileForm,
  StyledProfileWrapper,
  StyledIcon,
  StyledAvatarInput
} from './Profile.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { ContentWrapper } from '../../components/ContentWrapper';
import { ProfileImg } from '../../components/ProfileImg';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../components/FormFinal/InputText';
import { DropdownSelect } from '../../components/FormFinal/DropdownSelect';
import { IconPen } from '../../Icons/IconPen';

export const Profile: React.FC = () => {

  const [city, setCity] = useState('');
  const inputFile = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null);

  const cityList = ['Aberdeen', 'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown', 'Amarillo', 'Anaheim', 'Anchorage', 'Ann Arbor', 'Antioch', 'Apple Valley', 'Appleton', 'Arlington', 'Arvada', 'Asheville', 'Athens', 'Atlanta', 'Atlantic City', 'Augusta', 'Aurora', 'Austin', 'Bakersfield']
  const handleSubmit = (): void => {
    console.log(1);
  }

const fileUrl = file && URL.createObjectURL(file) || ''
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
            initialValues={{}}
            onSubmit={handleSubmit}
            render={(renderProps): JSX.Element => {
              const {values} = renderProps;
              return (
                <StyledProfileForm>
                  <StyledAvatarInput>
                    <Field name={'avatar'}>
                      {({input: { ...input}}) => (
                        <input
                          ref={inputFile}
                          {...input}
                          type="file"
                          onChange={({target}) => {
                            if (target?.files && target?.files?.length > 0) {
                              setFile(target.files[0])
                            }
                          }
                          }
                        />
                      )}
                    </Field>
                  </StyledAvatarInput>
                  <Field
                    name="firstName"
                    component={InputText}
                    type="text"
                    placeholder="Имя"
                  />
                  <Field
                    name="secondName"
                    component={InputText}
                    type="text"
                    placeholder="Фамилия"
                  />
                  <Field
                    name="lastName"
                    component={InputText}
                    type="text"
                    placeholder="Отчество"
                  />
                  <DropdownSelect
                    setOption={setCity}
                    placeholder="Город"
                    name={'category'}
                    option={city}
                    optionsList={cityList}/>
                  <Field
                    name="email"
                    component={InputText}
                    type="email"
                    placeholder="Почта"
                  />
                  <Field
                    name="password"
                    component={InputText}
                    type="password"
                    placeholder="Пароль"
                  />
                </StyledProfileForm>

              )
            }}
          />

        </StyledProfile>
      </ContentWrapper>
    </StyledProfileWrapper>
  );
};

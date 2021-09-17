import React from 'react';
import {
  StyledButtonBlock,
  StyledCross,
  StyledForm,
  StyledRegistrationFormModal,
  StyledTitle
} from './RegistrationFormModal.styled';
import { ModalTemplate } from "../Modals/ModalTemplate";
import { IconArrowRight, IconCross, } from "../../Icons";
import { Button } from "../Button";
import { theme } from "../../theme";
import { Field, Form } from 'react-final-form';
import { InputText } from "../FormFinal/InputText";
import { IRegistrationFormModalValues } from "./RegistrationFormModal.types";
import { InputCheckbox } from "../FormFinal/InputCheckbox";

export interface IRegistrationFormProps {
  closeModal?: () => void;
}

const handleSubmit = (values: IRegistrationFormModalValues) => {
  console.table(values)
}
export const RegistrationFormModal: React.FC<IRegistrationFormProps> = (props) => {
  const {closeModal} = props

  return (
    <ModalTemplate>
      <StyledRegistrationFormModal>
        <StyledTitle>
          <span>Регистрация</span>
          <StyledCross onClick={closeModal}>
            <IconCross/>
          </StyledCross>
        </StyledTitle>
        <Form
          initialValues={{}}
          onSubmit={handleSubmit}
          render={(renderProps): JSX.Element => {
            const {values} = renderProps;
            console.log(values)
            return (
              <StyledForm>
                <Field
                  name="secondName"
                  component={InputText}
                  type="text"
                  placeholder="Фамилия"
                />
                <Field
                  name="firstName"
                  component={InputText}
                  type="text"
                  placeholder="Имя"
                />
                <Field
                  name="lastName"
                  component={InputText}
                  type="text"
                  placeholder="Отчество"
                />
                <Field
                  name="city"
                  component={InputText}
                  type="text"
                  placeholder="Город"
                />
                <Field
                  name="email"
                  component={InputText}
                  type="email"
                  placeholder="Email"
                />
                <Field
                  name="password"
                  component={InputText}
                  type="password"
                  placeholder="Пароль"
                />
                <Field
                  name="repeatPassword"
                  component={InputText}
                  type="password"
                  placeholder="Повтор пароля"
                />
                <Field
                  name="license"
                  render={InputCheckbox}
                  type="checkbox"
                  value={'license'}
                  label="Даю согласие на обработку персональных данных"
                />
              </StyledForm>

            )
          }}
        />
        <StyledButtonBlock>
          <Button
            icon={IconArrowRight}
            reversed
            background={theme.color.yellow}
            color={'#fff'}
            title={'Зарегистрироваться'}
            onClick={() => {
              console.log('Логин')
            }}/>

          <Button
            view={'bordered'}
            borderColor={'rgba(61, 79, 135, 0.2)'}
            background={'#fff'}
            color={theme.color.blue}
            title={'Уже есть аккаунт'}
            onClick={() => {
              console.log('Логин')
            }}/>
        </StyledButtonBlock>
      </StyledRegistrationFormModal>
    </ModalTemplate>
  );
};

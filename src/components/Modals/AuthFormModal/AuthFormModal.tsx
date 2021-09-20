import React from 'react';
import {
  StyledAuthLink,
  StyledButtonBlock,
  StyledCross,
  StyledForm,
  StyledLinkBlock,
  StyledRegistrationFormModal,
  StyledTitle
} from './AuthFormModal.styled';
import { ModalTemplate } from "../ModalTemplate";
import { IconArrowRight, IconCross, } from "../../../Icons";
import { Button } from "../../Button";
import { theme } from "../../../theme";
import { Field, Form } from 'react-final-form';
import { InputText } from "../../FormFinal/InputText";
import { IAuthFormModalValues } from "./AuthFormModal.types";
import { asyncValidate } from "../../../services/forms/asyncValidate";
import { formsNames } from "../../../services/forms/formsNames";
import { setError } from "../../../services/forms/setFinalFormErrorMutator";

export interface IRegistrationFormProps {
  closeModal?: () => void;
}


export const AuthFormModal: React.FC<IRegistrationFormProps> = (props) => {
  const {closeModal} = props
  const submitHandler = (values: IAuthFormModalValues) => {
    console.table(values)
  }
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
          initialValues={{
            email: '',
            password: '',
          }}
          mutators={{setError}}
          onSubmit={submitHandler}
          render={(renderProps): JSX.Element => {
            const {values, handleSubmit, form} = renderProps;

            const handleValidate = async (): Promise<void> => {
              console.log(values)
              const errors = await asyncValidate(
                values,
                {
                  formName: formsNames.auth,
                },
                form.mutators.setError,
              );
              if (!errors) {
                handleSubmit();
              }
            };
            return (
              <>
                <StyledForm>
                  <Field
                    name="email"
                    component={InputText}
                    type="text"
                    placeholder="Email"
                  />
                  <Field
                    name="password"
                    component={InputText}
                    type="text"
                    placeholder="Пароль"
                  />
                </StyledForm>

                <StyledButtonBlock>
                  <Button
                    icon={IconArrowRight}
                    reversed
                    background={theme.color.yellow}
                    color={'#fff'}
                    title={'Войти'}
                    onClick={handleValidate}/>

                  <StyledLinkBlock>
                    <StyledAuthLink>Забыли пароль?</StyledAuthLink>
                    <StyledAuthLink>Регистрация</StyledAuthLink>
                  </StyledLinkBlock>
                </StyledButtonBlock>
              </>
            )
          }}
        />

      </StyledRegistrationFormModal>
    </ModalTemplate>
  );
};

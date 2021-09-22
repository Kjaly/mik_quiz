import React, { useEffect } from 'react';
import {
  StyledButtonBlock,
  StyledCross,
  StyledForm,
  StyledRegistrationFormModal,
  StyledTitle
} from './RegistrationFormModal.styled';
import { ModalTemplate } from '../ModalTemplate';
import { IconArrowRight, IconCross, } from '../../../Icons';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../FormFinal/InputText';
import { IRegistrationFormModalValues } from './RegistrationFormModal.types';
import { InputCheckbox } from '../../FormFinal/InputCheckbox';
import { asyncValidate } from '../../../services/forms/asyncValidate';
import { formsNames } from '../../../services/forms/formsNames';
import { setError } from '../../../services/forms/setFinalFormErrorMutator';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserRequest, removeUserErrors } from '../../../store/user/actions';
import { getErrorsSelector, getMessageSelector } from '../../../store/user/selectors';
import { modalsActions } from '../../../store/modals/actions';

export interface IRegistrationFormProps {
  closeModal?: () => void;
}


export const RegistrationFormModal: React.FC<IRegistrationFormProps> = (props) => {
  const {closeModal} = props
  const dispatch = useDispatch();

  const serverErrors = useSelector(getErrorsSelector);
  const submitHandler = (values: IRegistrationFormModalValues) => {
    const {privacy, ...body} = values
    dispatch(registerUserRequest(body))
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
            // middle_name: '',
            // first_name: '',
            // last_name: '',
            // city: '',
            // school: '',
            // school_class: '',
            // school_teacher_history: '',
            email: '',
            password: '',
            password_confirmation: '',
            // privacy: true,
          }}
          mutators={{setError}}
          onSubmit={submitHandler}
          render={(renderProps): JSX.Element => {
            const {values, handleSubmit, form} = renderProps;

            const handleValidate = async (): Promise<void> => {
              const errors = await asyncValidate(
                values,
                {
                  formName: formsNames.registration,
                },
                form.mutators.setError,
              );
              if (!errors) {
                handleSubmit();
              }
            };
            if (serverErrors) {
              Object.keys(serverErrors).forEach(item => {

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                form.mutators.setError({[item]: serverErrors[item][0]})
                dispatch(removeUserErrors())
              })
            }
            return (
              <>
                <StyledForm>
                  {/*<Field*/}
                  {/*  name="middle_name"*/}
                  {/*  component={InputText}*/}
                  {/*  type="text"*/}
                  {/*  placeholder="Фамилия"*/}
                  {/*  errors={serverErrors}*/}
                  {/*/>*/}
                  {/*<Field*/}
                  {/*  name="first_name"*/}
                  {/*  component={InputText}*/}
                  {/*  type="text"*/}
                  {/*  placeholder="Имя"*/}
                  {/*  errors={serverErrors}*/}
                  {/*/>*/}
                  {/*<Field*/}
                  {/*  name="last_name"*/}
                  {/*  component={InputText}*/}
                  {/*  type="text"*/}
                  {/*  placeholder="Отчество"*/}
                  {/*  errors={serverErrors}*/}
                  {/*/>*/}
                  {/*<Field*/}
                  {/*  name="city"*/}
                  {/*  component={InputText}*/}
                  {/*  type="text"*/}
                  {/*  placeholder="Город"*/}
                  {/*  errors={serverErrors}*/}
                  {/*/>*/}
                  {/*<Field*/}
                  {/*  name="school"*/}
                  {/*  component={InputText}*/}
                  {/*  type="text"*/}
                  {/*  placeholder="Школа"*/}
                  {/*  errors={serverErrors}*/}
                  {/*/>*/}
                  {/*<Field*/}
                  {/*  name="school_class"*/}
                  {/*  component={InputText}*/}
                  {/*  type="text"*/}
                  {/*  placeholder="Класс"*/}
                  {/*  errors={serverErrors}*/}
                  {/*/>*/}
                  {/*<Field*/}
                  {/*  name="school_teacher_history"*/}
                  {/*  component={InputText}*/}
                  {/*  type="text"*/}
                  {/*  placeholder="ФИО учителя истории"*/}
                  {/*  errors={serverErrors}*/}
                  {/*/>*/}
                  <Field
                    name="email"
                    component={InputText}
                    type="email"
                    placeholder="Email"
                    errors={serverErrors}
                  />
                  <Field
                    name="password"
                    component={InputText}
                    type="password"
                    placeholder="Пароль"
                    errors={serverErrors}
                  />
                  <Field
                    name="password_confirmation"
                    component={InputText}
                    type="password"
                    placeholder="Повтор пароля"
                    errors={serverErrors}
                  />
                  {/*<Field*/}
                  {/*  name="privacy"*/}
                  {/*  render={InputCheckbox}*/}
                  {/*  type="checkbox"*/}
                  {/*  label="Даю согласие на обработку персональных данных"*/}
                  {/*/>*/}
                </StyledForm>

                <StyledButtonBlock>
                  <Button
                    icon={IconArrowRight}
                    reversed
                    // disabled={!values.privacy}
                    background={theme.color.yellow}
                    color={'#fff'}
                    title={'Зарегистрироваться'}
                    onClick={handleValidate}/>

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
              </>
            )
          }}
        />

      </StyledRegistrationFormModal>
    </ModalTemplate>
  );
};

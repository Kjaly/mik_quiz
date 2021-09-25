import React from 'react';
import {
  StyledButtonBlock,
  StyledCross,
  StyledForm,
  StyledRegistrationFormModal,
  StyledTitle,
  StyledPreloader,
} from './RegistrationFormModal.styled';
import { ModalTemplate } from '../ModalTemplate';
import { IconArrowRight, IconCross, } from '../../../Icons';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../FormFinal/InputText';
import { IRegistrationFormModalValues } from './RegistrationFormModal.types';
import { asyncValidate } from '../../../services/forms/asyncValidate';
import { formsNames } from '../../../services/forms/formsNames';
import { setError } from '../../../services/forms/setFinalFormErrorMutator';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserRequest, removeUserErrors } from '../../../store/user/actions';
import { getErrorsSelector, getPendingSelector } from '../../../store/user/selectors';
import { modalsActions } from '../../../store/modals/actions';
import { Preloader } from '../../Preloader';

export interface IRegistrationFormProps {
  closeModal?: () => void;
}

export const RegistrationFormModal: React.FC<IRegistrationFormProps> = (props) => {
  const {closeModal} = props
  const dispatch = useDispatch();
  const loading = useSelector(getPendingSelector)
  const serverErrors = useSelector(getErrorsSelector);
  const submitHandler = (values: IRegistrationFormModalValues) => {
    const {privacy, ...body} = values
    dispatch(registerUserRequest(body))
  }
  const handleAuth = () => {
    dispatch(modalsActions.openModalAction({name: 'authModal'}))
  }

  return (
    <ModalTemplate>
      <StyledRegistrationFormModal>
        {loading &&
        <StyledPreloader>
          <Preloader/>
        </StyledPreloader>}
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
            city: '',
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
              <form onKeyDown={(e) => e.code === 'Enter' && handleValidate()}>
                <StyledForm>
                  <Field
                    autoComplete={'email'}
                    name="email"
                    component={InputText}
                    type="email"
                    placeholder="Email"
                    errors={serverErrors}
                  />
                  <Field
                    name="city"
                    component={InputText}
                    type="text"
                    placeholder="Город"
                    errors={serverErrors}
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
                    placeholder="Повтор пароля"
                    errors={serverErrors}
                  />
                </StyledForm>

                <StyledButtonBlock>
                  <Button
                    view={'bordered'}
                    borderColor={'rgba(61, 79, 135, 0.2)'}
                    background={'#fff'}
                    color={theme.color.blue}
                    title={'Уже есть аккаунт'}
                    onClick={handleAuth}/>

                  <Button
                    icon={IconArrowRight}
                    reversed
                    background={theme.color.yellow}
                    color={'#fff'}
                    title={'Зарегистрироваться'}
                    onClick={handleValidate}/>
                </StyledButtonBlock>
              </form>
            )
          }}
        />

      </StyledRegistrationFormModal>
    </ModalTemplate>
  );
};

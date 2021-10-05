import React, { useEffect } from 'react';
import {
  StyledAuthLink,
  StyledButtonBlock,
  StyledCross,
  StyledError,
  StyledForm,
  StyledLinkBlock,
  StyledRegistrationFormModal,
  StyledTitle
} from './AuthFormModal.styled';
import { ModalTemplate } from '../ModalTemplate';
import { IconArrowRight, IconCross, } from '../../../Icons';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../FormFinal/InputText';
import { IAuthFormModalValues } from './AuthFormModal.types';
import { asyncValidate } from '../../../services/forms/asyncValidate';
import { formsNames } from '../../../services/forms/formsNames';
import { setError } from '../../../services/forms/setFinalFormErrorMutator';
import { loginUserRequest, removeUserErrors } from '../../../store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorsSelector } from '../../../store/user/selectors';
import { modalsActions } from '../../../store/modals/actions';

export interface IRegistrationFormProps {
  closeModal?: () => void;
}


export const AuthFormModal: React.FC<IRegistrationFormProps> = (props) => {
  const {closeModal} = props
  const dispatch = useDispatch();
  const serverErrors = useSelector(getErrorsSelector);
  const submitHandler = (values: IAuthFormModalValues) => {
    dispatch(loginUserRequest(values))
  }
  // const handleRegistrate = () => {
  //   dispatch(modalsActions.openModalAction({name: 'registrationModal'}))
  // }

  const handleRecoveryPassword = () => {
    dispatch(modalsActions.openModalAction({name: 'recoveryPasswordModal'}))
  }
  useEffect(() => {
    return () => {
      dispatch(removeUserErrors())
    };
  }, []);


  return (
    <ModalTemplate>
      <StyledRegistrationFormModal>
        <StyledTitle>
          <span>Авторизация</span>
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

            if (serverErrors && typeof serverErrors !== 'string') {
              Object.keys(serverErrors).forEach(item => {

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                form.mutators.setError({[item]: serverErrors[item][0]})
              })
              dispatch(removeUserErrors())
            }

            return (
              <form onKeyDown={(e) => e.code === 'Enter' && handleValidate()}>
                <StyledForm>
                  <Field
                    autoComplete={'email'}
                    name="email"
                    component={InputText}
                    type="text"
                    placeholder="Email"
                  />
                  <Field
                    autoComplete={'off'}
                    name="password"
                    component={InputText}
                    type="password"
                    placeholder="Пароль"
                  />
                  <StyledError>
                    {typeof serverErrors === 'string' && serverErrors}
                  </StyledError>
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
                    <StyledAuthLink onClick={handleRecoveryPassword}>Забыли пароль?</StyledAuthLink>
                    {/*<StyledAuthLink onClick={handleRegistrate}>Регистрация</StyledAuthLink>*/}
                  </StyledLinkBlock>
                </StyledButtonBlock>
              </form>
            )
          }}
        />

      </StyledRegistrationFormModal>
    </ModalTemplate>
  );
};

import React, { useEffect } from 'react';
import {
  StyledButtonBlock,
  StyledCross,
  StyledDescription,
  StyledError,
  StyledForm,
  StyledPasswordRecoveryFormModal,
  StyledTitle
} from './PasswordRecoveryModal.styled';
import { ModalTemplate } from '../ModalTemplate';
import { IconArrowRight, IconCross, } from '../../../Icons';
import { Button } from '../../Button';
import { theme } from '../../../theme';
import { Field, Form } from 'react-final-form';
import { InputText } from '../../FormFinal/InputText';
import { IAuthFormModalValues } from './PasswordRecoveryModal.types';
import { asyncValidate } from '../../../services/forms/asyncValidate';
import { formsNames } from '../../../services/forms/formsNames';
import { setError } from '../../../services/forms/setFinalFormErrorMutator';
import { loginUserRequest, removeUserErrors } from '../../../store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getErrorsSelector } from '../../../store/user/selectors';
import { modalsActions } from '../../../store/modals/actions';
import { modalsSelectors } from '../../../store/modals/selectors';

export interface IPasswordRecoveryProps {
  closeModal?: () => void;
}


export const PasswordRecoveryModal: React.FC<IPasswordRecoveryProps> = (props) => {
  const {closeModal} = props
  const dispatch = useDispatch();
  const serverErrors = useSelector(getErrorsSelector);
  const modalProps = useSelector(modalsSelectors.getModalProps)

  const submitHandler = (values: IAuthFormModalValues) => {
    dispatch(loginUserRequest(values))
  }
  const handleAuth = () => {
    dispatch(modalsActions.openModalAction({name: 'authModal'}))
  }
  useEffect(() => {
    return () => {
      dispatch(removeUserErrors())
    };
  }, []);


  return (
    <ModalTemplate>
      <StyledPasswordRecoveryFormModal>
        <StyledTitle>
          <span>Восстановить пароль</span>
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
                <StyledDescription>
                  Пожалуйста, введите ваш email адрес указанный при регистрации для получения ссылки на восстановление
                  пароля
                </StyledDescription>
                <StyledForm isActive={!modalProps?.isActive}>
                  {modalProps?.isActive ? (
                    <>
                      <Field
                        autoComplete={'off'}
                        name="password"
                        component={InputText}
                        type="password"
                        placeholder="Пароль"
                      />
                      <Field
                        autoComplete={'off'}
                        name="password_confirmation"
                        component={InputText}
                        type="password"
                        placeholder="Повтор пароля"
                      />
                    </>
                  ) : (
                    <Field
                      autoComplete={'email'}
                      name="email"
                      component={InputText}
                      type="text"
                      placeholder="Email"
                    />
                  )}

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
                    title={'Восстановить пароль'}
                    onClick={handleValidate}/>

                  <Button
                    reversed
                    background={'#fff'}
                    color={theme.color.blue}
                    borderColor={theme.color.blue}
                    view={'bordered'}
                    title={'Войти на сайт'}
                    onClick={handleAuth}/>

                </StyledButtonBlock>
              </form>
            )
          }}
        />

      </StyledPasswordRecoveryFormModal>
    </ModalTemplate>
  );
};

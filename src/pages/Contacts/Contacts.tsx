import React from 'react';
import { StyledContactItem, StyledContactList, StyledContacts } from './Contacts.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { ContentWrapper } from "../../components/ContentWrapper";


export const Contacts: React.FC = () => {

  return (
    <StyledContacts>
      <TitleBanner>Контакты
      </TitleBanner>
      <ContentWrapper>
        <StyledContactList>
          <StyledContactItem>Калининградская Городская Общественная Организация «НАШ ГОРОД»</StyledContactItem>
          <StyledContactItem> Адрес: 236006 Калининград, ул. Житомирская, 16-20</StyledContactItem>
          <StyledContactItem> Телефон: +79632937469</StyledContactItem>
          <StyledContactItem> E-mail: <a href="mailto: info@future-of-russia.ru">info@future-of-russia.ru</a></StyledContactItem>
        </StyledContactList>
      </ContentWrapper>
    </StyledContacts>
  );
};

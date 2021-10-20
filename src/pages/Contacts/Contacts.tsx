import React from 'react';
import { StyledContactItem, StyledContactList, StyledContacts } from './Contacts.styled';
import { TitleBanner } from '../../components/TitleBanner';
import { ContentWrapper } from '../../components/ContentWrapper';
import { MetaWrapper } from '../../components/MetaWrapper';
import { useSelector } from 'react-redux';
import { getContentSelector } from '../../store/pages/selectors';


export const Contacts: React.FC = () => {
const content = useSelector(getContentSelector)
  return (
    <MetaWrapper>
      <StyledContacts>
        <TitleBanner>PAGES
        </TitleBanner>
        <ContentWrapper>
          {content ? (
            <StyledContactList dangerouslySetInnerHTML={{__html: content}}/>
          ) : (
            <StyledContactList>

              <StyledContactItem>Калининградская Городская Общественная Организация «НАШ ГОРОД»</StyledContactItem>
              <StyledContactItem> Адрес: 236006 Калининград, ул. Житомирская, 16-20</StyledContactItem>
              <StyledContactItem> Телефон: +79632937469</StyledContactItem>
              <StyledContactItem> E-mail: <a
                href="mailto: info@future-of-russia.ru">info@future-of-russia.ru</a></StyledContactItem>
            </StyledContactList>
          )}

        </ContentWrapper>
      </StyledContacts>
    </MetaWrapper>
  );
};

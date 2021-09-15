import React from 'react';
import {
  StyledTextSection, StyledImg,
  StyledText
} from './AboutTextSection.styled';
import { ContentWrapper } from '../ContentWrapper';
import textImg from '../../assets/images/about/textImg.png'
export const AboutTextSection: React.FC = () => {
  return (
    <ContentWrapper>
      <StyledTextSection>
        <StyledImg>
          <img src={textImg} alt=""/>
        </StyledImg>
        <StyledText>
          <p> Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции влечет
            за
            собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же новая модель
            организационной деятельности позволяет оценить значение соответствующий условий активизации. С другой
            стороны
            новая модель организационной деятельности позволяет оценить значение дальнейших направлений развития.</p>
          <p>Идейные
            соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей
            деятельности
            требуют определения и уточнения дальнейших направлений развития.</p>

        </StyledText>
      </StyledTextSection>
    </ContentWrapper>
  );
};

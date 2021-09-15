import React from 'react';
import { ContentWrapper } from "../ContentWrapper";
import {
  StyledButtonWrapper,
  StyledInfoWrapper,
  StyledJoinCard,
  StyledJoinCardDescription,
  StyledJoinCardImg,
  StyledJoinCardLeftBlock,
  StyledJoinCardText
} from './InfoBlockSection.styled';
import { theme } from "../../theme";
import { Button } from "../Button";
import { IconArrowRight } from "../../Icons";
import kld from '../../assets/images/infoBlock/kld.png'
import pskov from '../../assets/images/infoBlock/pskov.png'


const InfoBlockItem: React.FC<any> = (props) => {
  const {text, description, img} = props
  return (
    <StyledJoinCard>
      <StyledJoinCardLeftBlock>
        <StyledJoinCardText>
          {text}
        </StyledJoinCardText>
        {description && (
          <StyledJoinCardDescription>
            {description}
          </StyledJoinCardDescription>
        )}
        <StyledButtonWrapper>
          <Button
            icon={IconArrowRight}
            background={theme.color.yellow}
            title={'Присоединиться'}
            color={'#fff'}
            reversed
            onClick={() => {
              console.log('Присоединиться')
            }}/>
        </StyledButtonWrapper>
      </StyledJoinCardLeftBlock>
      <StyledJoinCardImg>
        <img src={img} alt=""/>
      </StyledJoinCardImg>
    </StyledJoinCard>
  )
}

export const InfoBlockSection: React.FC = () => {
  return (
    <ContentWrapper customMargin={'right'}>
      <StyledInfoWrapper>
        <InfoBlockItem text={'Присоединяйтесь к межрегиональному слету полуфиналистов в г. Калининград'} img={kld}/>
        <InfoBlockItem text={'Присоединяйтесь к межрегиональному слету полуфиналистов в г. Псков'} img={pskov}/>
      </StyledInfoWrapper>

    </ContentWrapper>
  );
};

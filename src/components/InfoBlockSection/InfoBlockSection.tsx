import React from 'react';
import { ContentWrapper } from '../ContentWrapper';
import {
  StyledButtonWrapper,
  StyledInfoWrapper,
  StyledJoinCard,
  StyledJoinCardDescription,
  StyledJoinCardImg,
  StyledJoinCardLeftBlock,
  StyledJoinCardText
} from './InfoBlockSection.styled';
import { theme } from '../../theme';
import { Button } from '../Button';
import { IconArrowRight } from '../../Icons';
import kld from '../../assets/images/infoBlock/kld.png'
import pskov from '../../assets/images/infoBlock/pskov.png'


const InfoBlockItem: React.FC<any> = (props) => {
  const {text, description, img, onClick, href, target} = props
  return (
    <StyledJoinCard>
      <StyledJoinCardLeftBlock>
        <StyledJoinCardText>
          {text}
        </StyledJoinCardText>
        {description && (
          <StyledJoinCardDescription >{description}</StyledJoinCardDescription>
        )}
        <StyledButtonWrapper>
          <Button
            icon={IconArrowRight}
            background={theme.color.yellow}
            title={'Присоединиться'}
            color={'#fff'}
            reversed
            href={href}
            target={target}
            onClick={onClick}/>
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
        <InfoBlockItem
          text={'Присоединяйтесь к межрегиональному слету полуфиналистов в г. Калининград'}
          img={kld}
          href={'https://www.youtube.com/watch?v=aHaFqWmric8'}
          target={'_blank'}
        />
        <InfoBlockItem
          text={'Присоединяйтесь к межрегиональному слету полуфиналистов в г. Псков'}
          href={'https://youtu.be/CQyp9JVd5jM'}
          target={'_blank'}
          img={pskov}/>
      </StyledInfoWrapper>

    </ContentWrapper>
  );
};

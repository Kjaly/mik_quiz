import React from 'react';
import { StyledButton, StyledGallery, StyledGalleryWrapper } from './Gallery.styled';
import { GalleryItem } from "./GalleryItem";
import { Button } from "../Button";
import { IconArrowRight } from "../../Icons";
import { theme } from "../../theme";

export const Gallery: React.FC = () => {
  const test = [1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1, 2, 2, 1]
  return (
    <StyledGalleryWrapper>
      <StyledGallery>
        {test.slice(0, 12).map((item, key) => (
          <GalleryItem key={key} type={item}/>
        ))}
      </StyledGallery>
      <StyledButton>
        <Button
          title={'Показать еще'}
          color={theme.color.blue}
          view={'bordered'}
          icon={IconArrowRight}
          borderColor={'rgba(61, 79, 135, 0.2)'}
          reversed/>
      </StyledButton>
    </StyledGalleryWrapper>
  );
};

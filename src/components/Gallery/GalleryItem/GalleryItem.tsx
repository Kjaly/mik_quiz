import React from 'react';
import {
  StyledGalleryItem,
  StyledItemImg,
  StyledItemButton,
  StyledItemUser,
} from './GalleryItem.styled';
import { IconVideo, IconPhoto } from "../../../Icons";

export interface IGalleryItemProps {
  type: number;
}

export const GalleryItem: React.FC<IGalleryItemProps> = (props) => {
  const {type} = props
  return (
    <StyledGalleryItem>
      <StyledItemImg>
        <StyledItemButton>
          {type === 1 ? <IconVideo/> : <IconPhoto/>}
          <span>Смотреть</span>
        </StyledItemButton>
      </StyledItemImg>
      <StyledItemUser>test</StyledItemUser>
    </StyledGalleryItem>
  );
};

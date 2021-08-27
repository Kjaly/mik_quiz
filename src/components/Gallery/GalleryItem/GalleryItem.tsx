import React from 'react';
import {
  StyledGalleryItem,
  StyledItemImg,
  StyledItemButton,
  StyledItemUser,
} from './GalleryItem.styled';
import { IconVideo, IconPhoto } from "../../../Icons";
import { useDispatch } from "react-redux";
import { modalsActions } from "../../../store/modals/actions";

export interface IGalleryItemProps {
  type: number;
}

export const GalleryItem: React.FC<IGalleryItemProps> = (props) => {
  const {type} = props

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(modalsActions.openModalAction({name: type !== 1 ? 'photoGallery' : 'videoGallery'}))
  }
  return (
    <StyledGalleryItem onClick={handleClick}>
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

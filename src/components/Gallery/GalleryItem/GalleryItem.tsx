import React from 'react';
import {
  StyledGalleryItem,
  StyledItemImg,
  StyledItemImgWrapper,
  StyledItemButton,
  StyledItemUser,
} from './GalleryItem.styled';
import { IconVideo, IconPhoto } from "../../../Icons";
import { useDispatch } from "react-redux";
import { modalsActions } from "../../../store/modals/actions";
import { IconPen } from "../../../Icons/IconPen";

export interface IGalleryItemProps {
  type: number;
  edit?: boolean;
  url?: string;
}

export const GalleryItem: React.FC<IGalleryItemProps> = (props) => {
  const {type, url, edit} = props

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(modalsActions.openModalAction({name: type !== 1 ? 'photoGallery' : 'videoGallery'}))
  }
  return (
    <StyledGalleryItem onClick={handleClick}>
      <StyledItemImgWrapper>
        <StyledItemButton>
          {type === 1 ? <IconVideo/> : <IconPhoto/>}
          <span>Смотреть</span>
        </StyledItemButton>
        {url ? <StyledItemImg src={url}/> : null}
      </StyledItemImgWrapper>
      <StyledItemUser>{edit ? <IconPen/> : 'test'}</StyledItemUser>
    </StyledGalleryItem>
  );
};

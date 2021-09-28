import React from 'react';
import {
  StyledGalleryItem,
  StyledItemButton,
  StyledItemCross,
  StyledItemImg,
  StyledItemImgWrapper,
  StyledItemUser,
} from './GalleryItem.styled';
import { IconCross, IconPhoto, IconVideo } from "../../../Icons";
import { IconPen } from "../../../Icons/IconPen";
import { modalsActions } from "../../../store/modals/actions";
import { useDispatch } from "react-redux";
import { TPublication } from "../../../store/publications/types";

export interface IGalleryItemProps {
  type: number;
  edit?: boolean;
  publication?: TPublication;
  handleRemove?: (id: string) => void;
}

export const GalleryItem: React.FC<IGalleryItemProps> = (props) => {
  const {type, publication, edit, handleRemove} = props

  const dispatch = useDispatch()
  const videoId = publication?.url?.split("v=")[1]?.split("&")[0];
  const handleClick = () => {
    dispatch(modalsActions.openModalAction({name: type !== 1 ? 'photoGallery' : 'videoGallery', props: {videoId}}))
  }
  const handleEdit = () => {
    dispatch(modalsActions.openModalAction({name: 'addPublicationModal', props: {isEdit: true}}))
  }
  const handleRemovePublication = () => {
   if (handleRemove && publication?.id) {
     handleRemove(publication.id)
   }
  }

  const previewUrl = type !== 1 ? publication?.url : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  return (
    <StyledGalleryItem>
      <StyledItemImgWrapper onClick={handleClick}>
        <StyledItemButton>
          {type === 1 ? <IconVideo/> : <IconPhoto/>}
          <span>Смотреть</span>
        </StyledItemButton>
        {previewUrl ? <StyledItemImg src={previewUrl}/> : null}
      </StyledItemImgWrapper>
      <StyledItemCross onClick={handleRemovePublication}><IconCross/></StyledItemCross>
      <StyledItemUser onClick={handleEdit}>{edit ? <IconPen/> : ''}</StyledItemUser>
    </StyledGalleryItem>
  );
};

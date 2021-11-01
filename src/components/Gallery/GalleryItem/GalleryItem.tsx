import React from 'react';
import {
  StyledGalleryItem,
  StyledItemButton,
  StyledItemCross, StyledItemEdit,
  StyledItemImg,
  StyledItemImgWrapper,
  StyledItemUser,
} from './GalleryItem.styled';
import { IconCross, IconPhoto, IconVideo } from '../../../Icons';
import { IconPen } from '../../../Icons/IconPen';
import { modalsActions } from '../../../store/modals/actions';
import { useDispatch } from 'react-redux';
import { TPublication } from '../../../store/publications/types';

export interface IGalleryItemProps {
  type: number;
  edit?: boolean;
  publication?: TPublication;
  handleRemove?: (id: number) => void;
}

export const GalleryItem: React.FC<IGalleryItemProps> = (props) => {
  const {type, publication, edit, handleRemove} = props;

  const dispatch = useDispatch();

  const videoId = publication?.youtube_url?.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)?.[1];

  const handleClick = () => {
    let modalProps;
    if (type === 1) {
      modalProps = {photos: publication?.photos};
    } else {
      modalProps = {videoId, name: publication?.name, description: publication?.description};
    }
    dispatch(modalsActions.openModalAction({
      name: type === 1 ? 'photoGallery' : 'videoGallery',
      props: {...modalProps},
    }));
  };
  const handleEdit = () => {
    dispatch(modalsActions.openModalAction({name: 'addPublicationModal', props: {isEdit: true, publication}}));
  };
  const handleRemovePublication = () => {
    if (handleRemove && publication?.id) {
      dispatch(modalsActions.openModalAction({
        name: 'removePublication', props: {remove: () => handleRemove(publication.id)},
      }));
    }
  };
  const previewUrl = type === 1 ? publication?.photos?.[0]?.url : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return (
    <StyledGalleryItem>
      <StyledItemImgWrapper onClick={handleClick}>
        <StyledItemButton>
          {type !== 1 ? <IconVideo/> : <IconPhoto/>}
          <span>Смотреть</span>
        </StyledItemButton>
        {previewUrl ? <StyledItemImg src={previewUrl}/> : null}
      </StyledItemImgWrapper>
      {handleRemove && <StyledItemCross onClick={handleRemovePublication}><IconCross/></StyledItemCross>}
      {edit
        ? <StyledItemEdit onClick={handleEdit}><IconPen/></StyledItemEdit>
        : <StyledItemUser><img src={publication?.user?.photo?.url} alt={publication?.user?.first_name}/></StyledItemUser>}
    </StyledGalleryItem>
  );
};

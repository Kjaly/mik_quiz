import React, { useEffect, useState } from 'react';
import { ModalTemplate } from "../ModalTemplate";
import {
  StyledAddPublicationModal,
  StyledDropDownWrapper,
  StyledPublicationsTitle
} from './AddPublicationModal.styled';
import { DropdownSelect } from "../../FormFinal/DropdownSelect";

export interface IAddPublicationModalProps {
  closeModal?: () => void;
}

export const AddPublicationModal: React.FC<IAddPublicationModalProps> = (props) => {
  const {closeModal} = props
  const [step, setStep] = useState(0);

  const categoryOptions = ['корпус', 'ужас', 'доклад', 'выступление', 'карта']
  const typeList = [
    {name: 'корпус', types: ['объект', 'километр', 'карман', 'стул', ' плата']},
    {name: 'ужас', types: ['разработка', 'глубина', 'карман', 'формапапа', ' плата']},
    {name: 'доклад', types: ['глубина', 'папа', 'карман', 'стул', ' плата']},
    {name: 'выступление', types: ['формапапа', 'километр', 'разработка', 'стул', ' глубина']},
    {name: 'карта', types: ['папа', 'километр', 'формапапа', 'папа', ' плата']},
  ]

  const [option, setOption] = useState(categoryOptions[0] || '');

  console.log(typeList);
  const currentCategoryTypes = typeList.find(item => item.name === option)?.types || []

  const [type, setType] = useState(currentCategoryTypes[0] || '');

  useEffect(() => {
    setType(currentCategoryTypes[0])
  }, [option]);


  console.log(currentCategoryTypes);
  console.log(option);
  return (
    <ModalTemplate>
      <StyledAddPublicationModal>
        <StyledPublicationsTitle>Добавление публикации</StyledPublicationsTitle>
        <StyledDropDownWrapper>
          <DropdownSelect setOption={setOption} name={'category'} option={option} optionsList={categoryOptions}/>
          <DropdownSelect setOption={setType} name={'type'} option={type} optionsList={currentCategoryTypes}/>

        </StyledDropDownWrapper>
      </StyledAddPublicationModal>
    </ModalTemplate>
  );
};

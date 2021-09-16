import React from 'react';

interface IQuizSectionItemProps {
  text: string;
}

export const QuizSectionItem: React.FC<IQuizSectionItemProps> = (props) => {

  const {text} = props
  return (
    <div>
      {text}
    </div>
  );
};
